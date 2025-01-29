

import { TransformUtil } from '@ts-core/common';
import { IsEnum, IsInt, IsOptional, Matches, IsNumberString } from 'class-validator';
import { HlfTransportCommandAsync } from '@hlf-core/common';
import { CommandName } from './Command';
import { ICoinPermission } from '../coin/permission';
import { ICoinData } from '../coin/data';
import { Coin, CoinFactory, CoinType, CoinUtil, ICoinSeries } from '../coin';
import { CoinUtil as CoinUtilBase } from '@hlf-core/coin';
import { ICoin } from '@hlf-core/coin';

export class CoinAddCommand extends HlfTransportCommandAsync<ICoinAddDto, Coin> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = CommandName.COIN_ADD;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinAddDto) {
        super(CoinAddCommand.NAME, TransformUtil.toClass(CoinAddDto, request));
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: ICoin): Coin {
        return CoinFactory.transform(item);
    }
}

/*
@Validate(CustomTextLength, [3, 20], {
    message: 'Wrong post title',
})
*/
export interface ICoinAddDto {
    type: CoinType;
    ticker: string;
    decimals: number;

    data?: ICoinData;
    owner?: string;
    series?: ICoinSeries;
    ownerUid?: string;
    permissions?: Array<ICoinPermission>;

    emit?: string;
}

export class CoinAddDto implements ICoinAddDto {
    @IsEnum(CoinType)
    type: CoinType;

    @Matches(CoinUtil.TICKER_REG_EXP)
    ticker: CoinType;

    @IsInt()
    decimals: number;

    @IsOptional()
    data?: ICoinData;

    @IsOptional()
    series?: ICoinSeries;

    @IsOptional()
    @Matches(CoinUtilBase.OWNER_UID_REG_EXP)
    ownerUid?: string;

    @IsOptional()
    permissions?: Array<ICoinPermission>;

    @IsOptional()
    @IsNumberString()
    emit?: string;
}
