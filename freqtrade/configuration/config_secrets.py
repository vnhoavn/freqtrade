

from freqtrade.constants import Config


def sanitize_config(config: Config) -> Config:
    """
    Remove sensitive information from the config.
    :param config: Configuration
    :return: Configuration
    """
    keys_to_remove = [
        "exchange.key",
        "exchange.secret",
        "exchange.password",
        "exchange.uid",
        "telegram.token",
        "telegram.chat_id",
        "discord.webhook_url",
        "api_server.password",
    ]

    for key in keys_to_remove:
        if '.' in key:
            nested_keys = key.split('.')
            nested_config = config
            for nested_key in nested_keys[:-1]:
                nested_config = nested_config.get(nested_key, {})
            nested_config[nested_keys[-1]] = 'REDACTED'
        else:
            config[key] = 'REDACTED'

    return config