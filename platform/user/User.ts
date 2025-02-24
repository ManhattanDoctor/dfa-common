import { UserPreferences } from './UserPreferences';
import { Type } from 'class-transformer';
import { IUIDable } from '@ts-core/common';

export class User implements IUIDable {
    public id: string;
    public uid: string;
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

