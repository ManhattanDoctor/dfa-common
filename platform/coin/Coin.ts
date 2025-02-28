import { ICoinBalance } from '@hlf-core/coin';
import { ICoinData } from '../../hlf/coin/data';
import { ICoinPermission } from '../../hlf/coin/permission';
import { Type } from 'class-transformer';
import { CoinType, ICoinSeries } from '../../hlf/coin';

export class Coin {
    public id: number;
    public name: string;
    public status: CoinStatus;
    public picture: string;
    public companyId: number;

    public hlfUid?: string;

    public type?: CoinType;
    public ticker?: string;
    public series?: ICoinSeries;

    public data?: ICoinData;
    public balance?: ICoinBalance;
    public permissions?: Array<ICoinPermission>;

    @Type(() => Date)
    public created: Date;
}

export enum CoinStatus {
    DRAFT = 'DRAFT',
    ACTIVE = 'ACTIVE',
    VERIFIED = 'VERIFIED',
    REJECTED = 'REJECTED',
    NON_ACTIVE = 'NON_ACTIVE',
    VERIFICATION_PROCESS = 'VERIFICATION_PROCESS'
}

export const COIN_NAME_MIN_LENGTH = 1;
export const COIN_NAME_MAX_LENGTH = 50;

export const COIN_PICTURE_MAX_LENGTH = 1024;