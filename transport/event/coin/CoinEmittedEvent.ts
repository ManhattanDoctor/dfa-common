import { ICoinEmitDto } from '../../command/coin/CoinEmitCommand';
import { LedgerEvent, LedgerEventDefault } from '../LedgerEvent';

export class CoinEmittedEvent extends LedgerEventDefault {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.COIN_EMITTED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ICoinEmitDto) {
        super(CoinEmittedEvent.NAME, data);
    }
}



