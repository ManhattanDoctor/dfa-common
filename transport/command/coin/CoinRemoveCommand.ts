import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { LedgerCoin } from '../../../ledger/coin';
import { Matches } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';

export class CoinRemoveCommand extends ChaincodeTransportCommandAsync<ICoinRemoveDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COIN_REMOVE;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinRemoveDto) {
        super(CoinRemoveCommand.NAME, TransformUtil.toClass(CoinRemoveDto, request));
    }
}

export interface ICoinRemoveDto extends ITraceable {
    uid: string;
}

class CoinRemoveDto implements ICoinRemoveDto {
    @Matches(LedgerCoin.UID_REG_EXP)
    uid: string;
}
