import { LedgerEvent, LedgerEventDefault } from '../LedgerEvent';

export class CoinExchangedEvent extends LedgerEventDefault {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.COIN_EXCHANGED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor() {
        super(CoinExchangedEvent.NAME);
    }
}

export interface ICoinExchangedDto {
    to: string;
    from: string;
}
