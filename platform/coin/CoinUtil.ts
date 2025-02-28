import { OpenIdResources } from "@ts-core/openid-common";
import { Coin, CoinStatus } from "../coin";
import { IResourcePermissionValidationOptions, ResourcePermission } from "../Permission";
import { CoinStatusInvalidError } from "../Error";
import { PermissionUtil } from "../util";
import * as _ from "lodash";
import { Company, CompanyStatus, CompanyUtil } from "../company";

export class CoinUtil {

    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------

    public static validate(item: Coin, statuses: Array<CoinStatus>, permission: IResourcePermissionValidationOptions, isThrowError?: boolean): boolean {
        return PermissionUtil.validateStatus(CoinStatusInvalidError, item, statuses, isThrowError) && PermissionUtil.validatePermission(permission, isThrowError);
    }

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public static isCanAdd(item: Company, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CompanyUtil.validateStatus(item, CompanyStatus.ACTIVE, isThrowError) && PermissionUtil.validatePermission({ permission: ResourcePermission.COIN_ADD, resources }, isThrowError);
    }

    public static isCanRead(resources: OpenIdResources, isThrowError: boolean): boolean {
        return PermissionUtil.validatePermission({ permission: ResourcePermission.COIN_READ, resources }, isThrowError);
    }
    public static isCanList(resources: OpenIdResources, isThrowError: boolean): boolean {
        return PermissionUtil.validatePermission({ permission: ResourcePermission.COIN_LIST, resources }, isThrowError);
    }

    public static isCanEdit(item: Coin, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CoinUtil.validate(item, COIN_EDIT_STATUS, { permission: ResourcePermission.COIN_EDIT, resources }, isThrowError);
    }
    public static isCanSubmit(item: Coin, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CoinUtil.validate(item, COIN_SUBMIT_STATUS, { permission: ResourcePermission.COIN_SUBMIT, resources }, isThrowError);
    }
    public static isCanVerify(item: Coin, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CoinUtil.validate(item, COIN_VERIFY_STATUS, { permission: ResourcePermission.COIN_VERIFY, resources }, isThrowError);
    }
    public static isCanReject(item: Coin, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CoinUtil.validate(item, COIN_REJECT_STATUS, { permission: ResourcePermission.COIN_REJECT, resources }, isThrowError);
    }
    public static isCanActivate(item: Coin, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CoinUtil.validate(item, COIN_ACTIVATE_STATUS, { permission: ResourcePermission.COIN_ACTIVATE, resources }, isThrowError);
    }
}

export const COIN_EDIT_STATUS = [CoinStatus.DRAFT, CoinStatus.REJECTED];
export const COIN_SUBMIT_STATUS = [CoinStatus.DRAFT, CoinStatus.REJECTED];
export const COIN_VERIFY_STATUS = [CoinStatus.VERIFICATION_PROCESS];
export const COIN_REJECT_STATUS = [CoinStatus.VERIFICATION_PROCESS];
export const COIN_ACTIVATE_STATUS = [CoinStatus.VERIFIED];
