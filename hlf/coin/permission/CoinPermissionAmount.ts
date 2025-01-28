import { ObjectUtil } from '@ts-core/common';
import { IsOptional, IsNumberString, IsEnum } from 'class-validator';
import { CoinPermissionType, ICoinPermission } from './CoinPermission';

export interface ICoinPermissionAmount extends ICoinPermission {
    maximum?: string;
    minimum?: string;
    discrete?: string;
}

export class CoinPermissionAmount implements ICoinPermissionAmount {
    @IsEnum(CoinPermissionType)
    public type: CoinPermissionType;

    @IsOptional()
    @IsNumberString()
    public maximum?: string;

    @IsOptional()
    @IsNumberString()
    public minimum?: string;

    @IsOptional()
    @IsNumberString()
    public discrete?: string;
}