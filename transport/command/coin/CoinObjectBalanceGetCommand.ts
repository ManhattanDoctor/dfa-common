import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { IsString, Matches } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerCoin, LedgerCoinObjectBalance } from '../../../ledger/coin';
import * as _ from 'lodash';

export class CoinObjectBalanceGetCommand extends ChaincodeTransportCommandAsync<ICoinObjectBalanceGetDto, LedgerCoinObjectBalance> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COIN_OBJECT_BALANCE_GET;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinObjectBalanceGetDto) {
        super(CoinObjectBalanceGetCommand.NAME, TransformUtil.toClass(CoinObjectBalanceGetDto, request), null, true);
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: LedgerCoinObjectBalance): LedgerCoinObjectBalance {
        return TransformUtil.toClass(LedgerCoinObjectBalance, item);
    }
}

export interface ICoinObjectBalanceGetDto extends ITraceable {
    coinUid: string;
    objectUid: string;
}

class CoinObjectBalanceGetDto implements ICoinObjectBalanceGetDto {
    @Matches(LedgerCoin.UID_REG_EXP)
    coinUid: string;

    @IsString()
    objectUid: string;
}
