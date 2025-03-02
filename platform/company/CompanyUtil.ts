import { OpenIdResources } from "@ts-core/openid-common";
import { Company, CompanyStatus } from "../company";
import { IResourcePermissionValidationOptions, ResourcePermission } from "../Permission";
import { CompanyStatusInvalidError, CompanyUndefinedError } from "../Error";
import { PermissionUtil } from "../util";
import * as _ from "lodash";

export class CompanyUtil {

    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------

    public static validate(item: CompanyToValidate, statuses: CompanyStatus | Array<CompanyStatus>, permission: IResourcePermissionValidationOptions, isThrowError?: boolean): boolean {
        return CompanyUtil.validateStatus(item, statuses, isThrowError) && PermissionUtil.validatePermission(permission, isThrowError);
    }

    public static validateStatus(item: CompanyToValidate, statuses: CompanyStatus | Array<CompanyStatus>, isThrowError?: boolean): boolean {
        return CompanyUtil.validateObject(item) && PermissionUtil.validateStatus(CompanyStatusInvalidError, item, statuses, isThrowError);
    }

    private static validateObject(item: CompanyToValidate, isThrowError?: boolean): boolean {
        if (!_.isNil(item)) {
            return true;
        }
        if (isThrowError) {
            throw new CompanyUndefinedError();
        }
        return false;
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

    public static isCanEdit(item: CompanyToValidate, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CompanyUtil.validate(item, COMPANY_EDIT_STATUS, { permission: ResourcePermission.COMPANY_EDIT, resources }, isThrowError);
    }
    public static isCanSubmit(item: CompanyToValidate, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CompanyUtil.validate(item, COMPANY_SUBMIT_STATUS, { permission: ResourcePermission.COMPANY_SUBMIT, resources }, isThrowError);
    }
    public static isCanVerify(item: CompanyToValidate, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CompanyUtil.validate(item, COMPANY_VERIFY_STATUS, { permission: ResourcePermission.COMPANY_VERIFY, resources }, isThrowError);
    }
    public static isCanReject(item: CompanyToValidate, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CompanyUtil.validate(item, COMPANY_REJECT_STATUS, { permission: ResourcePermission.COMPANY_REJECT, resources }, isThrowError);
    }
    public static isCanActivate(item: CompanyToValidate, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CompanyUtil.validate(item, COMPANY_ACTIVATE_STATUS, { permission: ResourcePermission.COMPANY_ACTIVATE, resources }, isThrowError);
    }

    public static isCanCoinAdd(item: CompanyToValidate, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CompanyUtil.validateStatus(item, CompanyStatus.ACTIVE, isThrowError) && PermissionUtil.validatePermission({ permission: ResourcePermission.COIN_ADD, resources }, isThrowError);
    }
}

export type CompanyToValidate = Pick<Company, 'id' | 'status'>;

export const COMPANY_EDIT_STATUS = [CompanyStatus.DRAFT, CompanyStatus.REJECTED];
export const COMPANY_SUBMIT_STATUS = [CompanyStatus.DRAFT, CompanyStatus.REJECTED];
export const COMPANY_VERIFY_STATUS = [CompanyStatus.VERIFICATION_PROCESS];
export const COMPANY_REJECT_STATUS = [CompanyStatus.VERIFICATION_PROCESS];
export const COMPANY_ACTIVATE_STATUS = [CompanyStatus.VERIFIED];
