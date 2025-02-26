import { ICoinBalance } from '@hlf-core/coin';
import { ICoinData } from '../../hlf/coin/data';
import { ICoinPermission } from '../../hlf/coin/permission';
import { Type } from 'class-transformer';
import { CoinType, ICoinSeries } from '../../hlf/coin';

export class Coin {
    public id: number;
    public status: CoinStatus;
    public companyId: number;

    public type: CoinType;
    public ticker: string;
    public picture: string;

    public hlfUid?: string;

    public data?: ICoinData;
    public series?: ICoinSeries;
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