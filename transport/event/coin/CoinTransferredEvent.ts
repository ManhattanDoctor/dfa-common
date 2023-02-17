import { ITraceable } from '@ts-core/common';
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

    constructor(data: ICoinTransferEventDto) {
        super(CoinTransferredEvent.NAME, data);
    }
}
export interface ICoinTransferEventDto extends ITraceable {
    to: string;
    from: string;
    amount: string;
    coinUid: string;
    decimals: number;
    votingUid?: string;
}