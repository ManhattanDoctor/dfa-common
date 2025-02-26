import { OpenIdResources } from "@ts-core/openid-common";
import { Coin, CoinStatus } from "../coin";
import { IResourcePermissionValidationOptions, ResourcePermission } from "../Permission";
import { CoinStatusInvalidError } from "../Error";
import { PermissionUtil } from "../util";
import * as _ from "lodash";

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

    public static isCanRead(resources: OpenIdResources, isThrowError: boolean): boolean {
        return PermissionUtil.validatePermission({ permission: ResourcePermission.COMPANY_READ, resources }, isThrowError);
    }
    public static isCanList(resources: OpenIdResources, isThrowError: boolean): boolean {
        return PermissionUtil.validatePermission({ permission: ResourcePermission.COMPANY_LIST, resources }, isThrowError);
    }
    public static isCanAdd(resources: OpenIdResources, isThrowError: boolean): boolean {
        return PermissionUtil.validatePermission({ permission: ResourcePermission.COMPANY_ADD, resources }, isThrowError);
    }

    public static isCanEdit(item: Coin, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CoinUtil.validate(item, COMPANY_EDIT_STATUS, { permission: ResourcePermission.COMPANY_EDIT, resources }, isThrowError);
    }
    public static isCanSubmit(item: Coin, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CoinUtil.validate(item, COMPANY_SUBMIT_STATUS, { permission: ResourcePermission.COMPANY_SUBMIT, resources }, isThrowError);
    }
    public static isCanVerify(item: Coin, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CoinUtil.validate(item, COMPANY_VERIFY_STATUS, { permission: ResourcePermission.COMPANY_VERIFY, resources }, isThrowError);
    }
    public static isCanReject(item: Coin, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CoinUtil.validate(item, COMPANY_REJECT_STATUS, { permission: ResourcePermission.COMPANY_REJECT, resources }, isThrowError);
    }
    public static isCanActivate(item: Coin, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CoinUtil.validate(item, COMPANY_ACTIVATE_STATUS, { permission: ResourcePermission.COMPANY_ACTIVATE, resources }, isThrowError);
    }
}

export const COMPANY_EDIT_STATUS = [CoinStatus.DRAFT, CoinStatus.REJECTED];
export const COMPANY_SUBMIT_STATUS = [CoinStatus.DRAFT, CoinStatus.REJECTED];
export const COMPANY_VERIFY_STATUS = [CoinStatus.VERIFICATION_PROCESS];
export const COMPANY_REJECT_STATUS = [CoinStatus.VERIFICATION_PROCESS];
export const COMPANY_ACTIVATE_STATUS = [CoinStatus.VERIFIED];
