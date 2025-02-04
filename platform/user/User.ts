import { Type } from 'class-transformer';
import { UserAccount } from './UserAccount';
import { UserStatistics } from './UserStatistics';
import { UserPreferences } from './UserPreferences';

export class User {
    public id: string;
    public login: string;
    public status: UserStatus;

    @Type(() => Date)
    public created: Date;

    @Type(() => UserAccount)
    public account: UserAccount;

    @Type(() => UserPreferences)
    public preferences: UserPreferences;

    @Type(() => UserStatistics)
    public statistics?: UserStatistics;
}

export enum UserStatus {
    ACTIVE = 'ACTIVE',
    NON_ACTIVE = 'NON_ACTIVE'
}

