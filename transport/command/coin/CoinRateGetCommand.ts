import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { IsString, Matches } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import * as _ from 'lodash';
import { LedgerCoin } from '../../../ledger/coin';

export class CoinRateGetCommand extends ChaincodeTransportCommandAsync<ICoinRateGetDto, ICoinRateGetDtoResponse> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COIN_RATE_GET;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinRateGetDto) {
        super(CoinRateGetCommand.NAME, TransformUtil.toClass(CoinRateGetDto, request), null, true);
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: ICoinRateGetDtoResponse): CoinRateGetDtoResponse {
        return TransformUtil.toClass(CoinRateGetDtoResponse, item);
    }
}

export interface ICoinRateGetDto extends ITraceable {
    to: string;
    from: string;
}
export interface ICoinRateGetDtoResponse {
    rate: string;
}

export class CoinRateGetDto implements ICoinRateGetDto {
    @Matches(LedgerCoin.UID_REG_EXP)
    to: string;

    @Matches(LedgerCoin.UID_REG_EXP)
    from: string;
}
class CoinRateGetDtoResponse implements ICoinRateGetDtoResponse {
    @IsString()
    rate: string;
}
