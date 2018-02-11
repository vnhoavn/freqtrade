# pragma pylint: disable=missing-docstring,C0103
import argparse
import json
import time
import datetime
import pytest
import numpy as np
import pandas as pd
from copy import deepcopy
from unittest.mock import MagicMock
from jsonschema import ValidationError

from freqtrade.analyze import parse_ticker_dataframe
from freqtrade.misc import (common_args_parser, file_dump_json, load_config,
                            parse_args, parse_timerange, throttle, datesarray_to_datetimearray)
import freqtrade.misc as misc


def test_throttle():

    def func():
        return 42

    start = time.time()
    result = throttle(func, min_secs=0.1)
    end = time.time()

    assert result == 42
    assert end - start > 0.1

    result = throttle(func, min_secs=-1)
    assert result == 42


def test_throttle_with_assets():

    def func(nb_assets=-1):
        return nb_assets

    result = throttle(func, min_secs=0.1, nb_assets=666)
    assert result == 666

    result = throttle(func, min_secs=0.1)
    assert result == -1


# Parse common command-line-arguments. Used for all tools

def test_parse_args_none():
    args = common_args_parser('')
    assert isinstance(args, argparse.ArgumentParser)


def test_parse_args_defaults():
    args = parse_args([], '')
    assert args.config == 'config.json'
    assert args.dynamic_whitelist is None
    assert args.loglevel == 20


def test_parse_args_config():
    args = parse_args(['-c', '/dev/null'], '')
    assert args.config == '/dev/null'

    args = parse_args(['--config', '/dev/null'], '')
    assert args.config == '/dev/null'


def test_parse_args_verbose():
    args = parse_args(['-v'], '')
    assert args.loglevel == 10

    args = parse_args(['--verbose'], '')
    assert args.loglevel == 10


def test_parse_args_version():
    with pytest.raises(SystemExit, match=r'0'):
        parse_args(['--version'], '')


def test_parse_args_invalid():
    with pytest.raises(SystemExit, match=r'2'):
        parse_args(['-c'], '')


# Parse command-line-arguments
# used for main, backtesting and hyperopt


def test_parse_args_dynamic_whitelist():
    args = parse_args(['--dynamic-whitelist'], '')
    assert args.dynamic_whitelist == 20


def test_parse_args_dynamic_whitelist_10():
    args = parse_args(['--dynamic-whitelist', '10'], '')
    assert args.dynamic_whitelist == 10


def test_parse_args_dynamic_whitelist_invalid_values():
    with pytest.raises(SystemExit, match=r'2'):
        parse_args(['--dynamic-whitelist', 'abc'], '')


def test_parse_args_backtesting_invalid():
    with pytest.raises(SystemExit, match=r'2'):
        parse_args(['backtesting --ticker-interval'], '')

    with pytest.raises(SystemExit, match=r'2'):
        parse_args(['backtesting --ticker-interval', 'abc'], '')


def test_scripts_options():
    # Test with -p arg given
    args = ['-p', 'BTC_ETH']
    parser = argparse.ArgumentParser()
    misc.scripts_options(parser)
    call_args = parser.parse_args(args)
    assert call_args.pair == 'BTC_ETH'
    # Test with NO -p arg given
    parser = argparse.ArgumentParser()
    misc.scripts_options(parser)
    call_args = parser.parse_args([])
    assert not call_args.pair


def test_parse_args_backtesting_custom():
    args = [
        '-c', 'test_conf.json',
        'backtesting',
        '--live',
        '--ticker-interval', '1',
        '--refresh-pairs-cached']
    call_args = parse_args(args, '')
    assert call_args.config == 'test_conf.json'
    assert call_args.live is True
    assert call_args.loglevel == 20
    assert call_args.subparser == 'backtesting'
    assert call_args.func is not None
    assert call_args.ticker_interval == 1
    assert call_args.refresh_pairs is True


def test_parse_args_hyperopt_custom():
    args = ['-c', 'test_conf.json', 'hyperopt', '--epochs', '20']
    call_args = parse_args(args, '')
    assert call_args.config == 'test_conf.json'
    assert call_args.epochs == 20
    assert call_args.loglevel == 20
    assert call_args.subparser == 'hyperopt'
    assert call_args.func is not None


def test_file_dump_json(mocker):
    file_open = mocker.patch('freqtrade.misc.open', MagicMock())
    json_dump = mocker.patch('json.dump', MagicMock())
    file_dump_json('somefile', [1, 2, 3])
    assert file_open.call_count == 1
    assert json_dump.call_count == 1


def test_parse_timerange_incorrect():
    assert ((None, 'line'), None, -200) == parse_timerange('-200')
    assert (('line', None), 200, None) == parse_timerange('200-')
    with pytest.raises(Exception, match=r'Incorrect syntax.*'):
        parse_timerange('-')


def test_load_config(default_conf, mocker):
    file_mock = mocker.patch('freqtrade.misc.open', mocker.mock_open(
        read_data=json.dumps(default_conf)
    ))
    validated_conf = load_config('somefile')
    assert file_mock.call_count == 1
    assert validated_conf.items() >= default_conf.items()


def test_load_config_invalid_pair(default_conf, mocker):
    conf = deepcopy(default_conf)
    conf['exchange']['pair_whitelist'].append('BTC-ETH')
    mocker.patch(
        'freqtrade.misc.open',
        mocker.mock_open(
            read_data=json.dumps(conf)))
    with pytest.raises(ValidationError, match=r'.*does not match.*'):
        load_config('somefile')


def test_load_config_missing_attributes(default_conf, mocker):
    conf = deepcopy(default_conf)
    conf.pop('exchange')
    mocker.patch(
        'freqtrade.misc.open',
        mocker.mock_open(
            read_data=json.dumps(conf)))
    with pytest.raises(ValidationError, match=r'.*\'exchange\' is a required property.*'):
        load_config('somefile')


def test_datesarray_to_datetimearray(ticker_history):
    dataframes = parse_ticker_dataframe(ticker_history)
    dates = datesarray_to_datetimearray(dataframes['date'])

    assert isinstance(dates[0], datetime.datetime)
    assert dates[0].year == 2017
    assert dates[0].month == 11
    assert dates[0].day == 26
    assert dates[0].hour == 8
    assert dates[0].minute == 50

    date_len = len(dates)
    assert date_len == 3


def test_common_datearray():
    dts = [datetime.datetime(2018, 2, 1),
           datetime.datetime(2018, 2, 2),
           datetime.datetime(2018, 2, 3),
           datetime.datetime(2018, 2, 4)]
    dt64 = [np.datetime64(dt) for dt in dts]

    def check(totlen, idx1, idx2):
        df1 = pd.DataFrame([[dt64[x], x] for x in idx1],
                           columns=['date', 'foo'])
        df2 = pd.DataFrame([[dt64[x], x] for x in idx2],
                           columns=['date', 'foo'])
        datearray = misc.common_datearray({'q1': df1, 'q2': df2})
        assert len(datearray) == totlen
        for i in range(0, totlen):
            assert dts[i] == datearray[i]

    # ensure two merged date arrays with unique dates
    check(4, [0, 2], [1, 3])
    # ensure two merged date arrays with unique dates
    check(4, [0, 2], [1, 2, 3])
    # ensure unsorted arrays result in sorted arrays
    check(4, [2, 0], [3, 1])
