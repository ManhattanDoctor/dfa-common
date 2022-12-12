import { ICoinTransferDto } from '../../command/coin';
import { LedgerEvent, LedgerEventDefault } from '../LedgerEvent';

export class CoinTransferredEvent extends LedgerEventDefault {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.COIN_TRANSFERRED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ICoinTransferDto) {
        super(CoinTransferredEvent.NAME, data);
    }
}