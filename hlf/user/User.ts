import { IsEnum, IsOptional, Matches, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { IUser, UserUtil, CryptoKey, ICryptoKey } from '@hlf-core/common';

export enum UserStatus {
    ACTIVE = 'ACTIVE',
    NON_ACTIVE = 'NON_ACTIVE'
}

export enum UserRole {
    USER_MANAGER = 'USER_MANAGER',
    COIN_MANAGER = 'COIN_MANAGER',
    COMPANY_MANAGER = 'COMPANY_MANAGER',
}

export class User implements IUser<UserStatus, UserRole> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static PREFIX = 'user';

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(UserUtil.UID_REG_EXP)
    public uid: string;

    @Type(() => Date)
    @IsDate()
    public created: Date;

    @IsEnum(UserStatus)
    public status: UserStatus;

    @IsOptional()
    @IsEnum(UserRole, { each: true })
    public roles?: Array<UserRole>;

    @IsOptional()
    @Type(() => CryptoKey)
    public cryptoKey?: ICryptoKey;
}

