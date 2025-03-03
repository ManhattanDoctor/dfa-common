import { OpenIdResources } from "@ts-core/openid-common";
import { Coin, CoinStatus } from "../coin";
import { IResourcePermissionValidationOptions, ResourcePermission } from "../Permission";
import { CoinStatusInvalidError, CoinUndefinedError, CompanyForbiddenError } from "../Error";
import { PermissionUtil } from "../util";
import { CompanyToValidate, } from "../company";
import * as _ from "lodash";

export class CoinUtil {

    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------

    private static validate(item: CoinToValidate, statuses: Array<CoinStatus>, permission: IResourcePermissionValidationOptions, isThrowError: boolean): boolean {
        return CoinUtil.validateObject(item) && PermissionUtil.validateStatus(CoinStatusInvalidError, item, statuses, isThrowError) && PermissionUtil.validatePermission(permission, isThrowError);
    }

    private static validateCompany(company: CompanyToValidate, item: CoinToValidate, isThrowError: boolean): boolean {
        if (company.id !== item.companyId && isThrowError) {
            throw new CompanyForbiddenError(item.companyId);
        }
        return company.id === item.companyId;
    }

    private static validateObject(item: CoinToValidate, isThrowError?: boolean): boolean {
        if (!_.isNil(item)) {
            return true;
        }
        if (isThrowError) {
            throw new CoinUndefinedError();
        }
        return false;
    }

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public static isCanRead(resources: OpenIdResources, isThrowError: boolean): boolean {
        return PermissionUtil.validatePermission({ permission: ResourcePermission.COIN_READ, resources }, isThrowError);
    }
    public static isCanList(resources: OpenIdResources, isThrowError: boolean): boolean {
        return PermissionUtil.validatePermission({ permission: ResourcePermission.COIN_LIST, resources }, isThrowError);
    }

    public static isCanEdit(company: CompanyToValidate, item: CoinToValidate, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CoinUtil.validateCompany(company, item, isThrowError) && CoinUtil.validate(item, COIN_EDIT_STATUS, { permission: ResourcePermission.COIN_EDIT, resources }, isThrowError);
    }
    public static isCanSubmit(company: CompanyToValidate, item: CoinToValidate, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CoinUtil.validateCompany(company, item, isThrowError) && CoinUtil.validate(item, COIN_SUBMIT_STATUS, { permission: ResourcePermission.COIN_SUBMIT, resources }, isThrowError);
    }
    public static isCanRemove(company: CompanyToValidate, item: CoinToValidate, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CoinUtil.validateCompany(company, item, isThrowError) && CoinUtil.validate(item, COIN_REMOVE_STATUS, { permission: ResourcePermission.COIN_REMOVE, resources }, isThrowError);
    }
    public static isCanActivate(company: CompanyToValidate, item: CoinToValidate, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CoinUtil.validateCompany(company, item, isThrowError) && CoinUtil.validate(item, COIN_ACTIVATE_STATUS, { permission: ResourcePermission.COIN_ACTIVATE, resources }, isThrowError);
    }
    public static isCanVerify(item: CoinToValidate, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CoinUtil.validate(item, COIN_VERIFY_STATUS, { permission: ResourcePermission.COIN_VERIFY, resources }, isThrowError);
    }
    public static isCanReject(item: CoinToValidate, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CoinUtil.validate(item, COIN_REJECT_STATUS, { permission: ResourcePermission.COIN_REJECT, resources }, isThrowError);
    }
}

export type CoinToValidate = Pick<Coin, 'id' | 'status' | 'companyId'>;

export const COIN_EDIT_STATUS = [CoinStatus.DRAFT, CoinStatus.REJECTED];
export const COIN_SUBMIT_STATUS = [CoinStatus.DRAFT, CoinStatus.REJECTED];
export const COIN_VERIFY_STATUS = [CoinStatus.VERIFICATION_PROCESS];
export const COIN_REJECT_STATUS = [CoinStatus.VERIFICATION_PROCESS];
export const COIN_REMOVE_STATUS = [CoinStatus.DRAFT, CoinStatus.REJECTED, CoinStatus.VERIFIED];
export const COIN_ACTIVATE_STATUS = [CoinStatus.VERIFIED];

