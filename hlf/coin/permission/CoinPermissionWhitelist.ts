import { IsEnum, Matches } from 'class-validator';
import { CoinPermissionType, ICoinPermission } from "./CoinPermission";
import { CoinUtil } from "@hlf-core/coin";

export interface ICoinPermissionWhitelist extends ICoinPermission {
    objects: Array<string>;
}

export class CoinPermissionWhitelist implements ICoinPermissionWhitelist {
    @IsEnum(CoinPermissionType)
    public type: CoinPermissionType;

    @Matches(CoinUtil.OBJECT_UID_REG_EXP, { each: true })
    public objects: Array<string>;
}