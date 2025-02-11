import { Type } from 'class-transformer';
import { UserPreferences } from './UserPreferences';

export class User {
    public id: string;
    public login: string;
    public status: UserStatus;

    public companyId?: number;

    @Type(() => Date)
    public created: Date;

    @Type(() => UserPreferences)
    public preferences: UserPreferences;
}

export enum UserStatus {
    ACTIVE = 'ACTIVE',
    NON_ACTIVE = 'NON_ACTIVE'
}

