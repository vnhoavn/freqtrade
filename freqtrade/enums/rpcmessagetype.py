from enum import Enum


class RPCMessageType(Enum):
    STATUS = 'status'
    WARNING = 'warning'
    STARTUP = 'startup'

    BUY = 'buy'
    BUY_FILL = 'buy_fill'
    BUY_CANCEL = 'buy_cancel'

    SELL = 'sell'
    SELL_FILL = 'sell_fill'
    SELL_CANCEL = 'sell_cancel'

    SHORT = 'short'
    SHORT_FILL = 'short_fill'
    SHORT_CANCEL = 'short_cancel'

    EXIT_SHORT = 'exit_short'
    EXIT_SHORT_FILL = 'exit_short_fill'
    EXIT_SHORT_CANCEL = 'exit_short_cancel'

    def __repr__(self):
        return self.value

    def __str__(self):
        return self.value
