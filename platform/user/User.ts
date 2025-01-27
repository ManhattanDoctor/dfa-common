import { Type } from 'class-transformer';
import { UserType } from './UserType';
import { UserPreferences } from './UserPreferences';
import { UserStatus } from './UserStatus';
import { CoinBalance } from '../coin';
import { ILedgreable } from '../ILedgerable';
import { UserRole } from '../../hlf/user';

export class User implements ILedgreable {
    id: number;
    uid: string;
    type: UserType;
    login: string;
    status: UserStatus;
    resource: UserResource;
    ledgerUid: string;

    roles?: Array<UserRole>;

    @Type(() => Date)
    created: Date;

    @Type(() => Date)
    updated: Date;

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
