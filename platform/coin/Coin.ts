import { ICoinBalance } from '@hlf-core/coin';
import { ICoinData } from '../../hlf/coin/data';
import { ICoinPermission } from '../../hlf/coin/permission';
import { Type } from 'class-transformer';

export class Coin {
    public id: number;
    public status: CoinStatus;
    public companyId: number;

    public data?: ICoinData;
    public hlfUid?: string;
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