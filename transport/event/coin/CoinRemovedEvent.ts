import { LedgerEvent, ILedgerEventDto, LedgerEventDefault } from '../LedgerEvent';

export class CoinRemovedEvent extends LedgerEventDefault {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.COIN_REMOVED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ILedgerEventDto) {
        super(CoinRemovedEvent.NAME, data);
    }
}
