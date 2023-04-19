import { Type } from 'class-transformer';
import { UserType } from './UserType';
import { UserPreferences } from './UserPreferences';
import { UserStatus } from './UserStatus';
import { CoinBalance } from '../coin/CoinBalance';
import { ILedgreable } from '../ILedgerable';

export class User implements ILedgreable {
    id: number;
    uid: string;
    type: UserType;
    login: string;
    status: UserStatus;
    resource: UserResource;
    companyId: number;
    ledgerUid: string;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;

    @Type(() => UserPreferences)
    preferences: UserPreferences;

    balances?: Array<CoinBalance>;
}

export enum UserResource {
    VK = 'VK',
    MAIL = 'MAIL',
    YANDEX = 'YANDEX',
    GOOGLE = 'GOOGLE',
    ETHEREUM = 'ETHEREUM',
}
