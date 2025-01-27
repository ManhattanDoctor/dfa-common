import { Type } from 'class-transformer';
import { CoinUtil } from '@hlf-core/coin';
import { Matches, IsOptional, IsNumberString, ValidateNested } from 'class-validator';

export interface ICoinPermission {
    list?: ICoinPermissionList;
    amount?: ICoinPermissionAmount;
}
export interface ICoinPermissionList {
    white?: Array<string>;
    black?: Array<string>;
}
export interface ICoinPermissionAmount {
    maximum?: string;
    minimum?: string;
    discrete?: string;
}

export class CoinPermission implements CoinPermission {
    @IsOptional()
    @Type(() => CoinPermissionAmount)
    @ValidateNested()
    public amount?: CoinPermissionAmount;

    @IsOptional()
    @Type(() => CoinPermissionList)
    @ValidateNested()
    public list?: CoinPermissionList;
}

export class CoinPermissionList implements ICoinPermissionList {
    @IsOptional()
    @Matches(CoinUtil.OBJECT_UID_REG_EXP, { each: true })
    white?: Array<string>;

    @IsOptional()
    @Matches(CoinUtil.OBJECT_UID_REG_EXP, { each: true })
    black?: Array<string>;
}

export class CoinPermissionAmount implements ICoinPermissionAmount {
    @IsOptional()
    @IsNumberString()
    maximum?: string;

    @IsOptional()
    @IsNumberString()
    minimum?: string;

    @IsOptional()
    @IsNumberString()
    discrete?: string;
}