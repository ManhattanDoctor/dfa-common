import { LedgerEvent, ILedgerEventDto, LedgerEventDefault } from '../LedgerEvent';

export class CoinHoldedEvent extends LedgerEventDefault {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.COIN_HOLDED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ILedgerEventDto) {
        super(CoinHoldedEvent.NAME, data);
    }
}
