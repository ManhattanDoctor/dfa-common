import { IsEnum, Matches } from 'class-validator';
import { CoinPermissionType, ICoinPermission } from "./CoinPermission";
import { CoinUtil } from "@hlf-core/coin";

export interface ICoinPermissionBlacklist extends ICoinPermission {
    objects: Array<string>;
}

export class CoinPermissionBlacklist implements ICoinPermissionBlacklist {
    @IsEnum(CoinPermissionType)
    public type: CoinPermissionType;

    @Matches(CoinUtil.OBJECT_UID_REG_EXP, { each: true })
    public objects: Array<string>;
}