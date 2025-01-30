import { IsOptional, IsNumberString, IsEnum } from 'class-validator';
import { CoinPermissionType, ICoinPermission } from './CoinPermission';

export interface ICoinPermissionEmission extends ICoinPermission {
    maximum?: string;
}

export class CoinPermissionEmission implements ICoinPermissionEmission {
    @IsEnum(CoinPermissionType)
    public type: CoinPermissionType;

    @IsOptional()
    @IsNumberString()
    public maximum?: string;
}