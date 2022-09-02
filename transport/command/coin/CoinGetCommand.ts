import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { IsOptional, Matches, IsArray } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerCoin } from '../../../ledger/coin';
import * as _ from 'lodash';

export class CoinGetCommand extends ChaincodeTransportCommandAsync<ICoinGetDto, LedgerCoin> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COIN_GET;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinGetDto) {
        super(CoinGetCommand.NAME, TransformUtil.toClass(CoinGetDto, request), null, true);
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: LedgerCoin): LedgerCoin {
        return TransformUtil.toClass(LedgerCoin, item);
    }
}

export interface ICoinGetDto extends ITraceable {
    uid: string;
    details?: Array<keyof LedgerCoin>;
}

class CoinGetDto implements ICoinGetDto {
    @Matches(LedgerCoin.UID_REG_EXP)
    uid: string;

    @IsArray()
    @IsOptional()
    details?: Array<keyof LedgerCoin>;
}
