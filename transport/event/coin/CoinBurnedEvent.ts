import { ICoinEmitDto } from '../../command/coin/CoinEmitCommand';
import { LedgerEvent, LedgerEventDefault } from '../LedgerEvent';

export class CoinBurnedEvent extends LedgerEventDefault {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.COIN_BURNED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ICoinEmitDto) {
        super(CoinBurnedEvent.NAME, data);
    }
}



