import { Coin as CoinBase, ICoinBalance, ICoin as ICoinBase } from "@hlf-core/coin";
import { IsDefined, IsOptional, ValidateNested } from 'class-validator';
import { Transform } from 'class-transformer';
import { CoinFactory } from "./CoinFactory";
import { ICoinData } from "./data";
import { ICoinPermission } from "./permission";
import * as _ from 'lodash';

export enum CoinType {
    FT = 'FT',
    NFT = 'NFT',
}

export enum CoinAction {
    ADD = 'ADD',
    EMIT = 'EMIT',
    BURN = 'BURN',
    HOLD = 'HOLD',
    UNHOLD = 'UNHOLD',
    TRANSFER = 'TRANSFER',
    EMIT_HELD = 'EMIT_HELD',
    BURN_HELD = 'BURN_HELD',
}

export interface ICoin<D extends ICoinData = ICoinData, P extends ICoinPermission = ICoinPermission> extends ICoinBase {
    data?: D;
    permissions?: Array<P>;
}

export class Coin<D extends ICoinData = ICoinData, P extends ICoinPermission = ICoinPermission> extends CoinBase implements ICoin<D, P> {
    @IsOptional()
    @Transform(item => CoinFactory.transformData(item.value), { toClassOnly: true })
    @ValidateNested()
    public data?: D;

    @IsDefined()
    @Transform(item => CoinFactory.transformBalance(item.value), { toClassOnly: true })
    @ValidateNested()
    declare public balance: ICoinBalance;

    @IsOptional()
    @Transform(item => item.value?.map(CoinFactory.transformPermission), { toClassOnly: true })
    @ValidateNested()
    public permissions?: Array<P>;
}