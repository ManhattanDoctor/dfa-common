import { OpenIdResources } from "@ts-core/openid-common";
import { Company, CompanyStatus } from "../company";
import { IResourcePermissionValidationOptions, ResourcePermission } from "../Permission";
import { CompanyStatusInvalidError } from "../Error";
import { PermissionUtil } from "../util";
import * as _ from "lodash";

export class CompanyUtil {

    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------

    public static validate(item: Company, statuses: Array<CompanyStatus>, permission: IResourcePermissionValidationOptions, isThrowError?: boolean): boolean {
        return CompanyUtil.validateStatus(item, statuses, isThrowError) && PermissionUtil.validatePermission(permission, isThrowError);
    }

    public static validateStatus(item: Company, status: CompanyStatus | Array<CompanyStatus>, isThrowError: boolean): boolean {
        if (_.isNil(status)) {
            return false;
        }
        try {
            status = !_.isArray(status) ? [status] : status;
            if (!_.isEmpty(status) && !status.includes(item.status)) {
                throw new CompanyStatusInvalidError({ value: item.status, expected: status })
            }
            return true;
        }
        catch (error) {
            if (isThrowError) {
                throw error;
            }
            return false;
        }
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
    
    public static isCanEdit(item: Company, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CompanyUtil.validate(item, COMPANY_EDIT_STATUS, { permission: ResourcePermission.COMPANY_EDIT, resources }, isThrowError);
    }
    public static isCanSubmit(item: Company, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CompanyUtil.validate(item, COMPANY_SUBMIT_STATUS, { permission: ResourcePermission.COMPANY_SUBMIT, resources }, isThrowError);
    }
    public static isCanVerify(item: Company, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CompanyUtil.validate(item, COMPANY_VERIFY_STATUS, { permission: ResourcePermission.COMPANY_VERIFY, resources }, isThrowError);
    }
    public static isCanReject(item: Company, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CompanyUtil.validate(item, COMPANY_REJECT_STATUS, { permission: ResourcePermission.COMPANY_REJECT, resources }, isThrowError);
    }
    public static isCanActivate(item: Company, resources: OpenIdResources, isThrowError: boolean): boolean {
        return CompanyUtil.validate(item, COMPANY_ACTIVATE_STATUS, { permission: ResourcePermission.COMPANY_ACTIVATE, resources }, isThrowError);
    }
}

export const COMPANY_EDIT_STATUS = [CompanyStatus.DRAFT, CompanyStatus.REJECTED];
export const COMPANY_SUBMIT_STATUS = [CompanyStatus.DRAFT, CompanyStatus.REJECTED];
export const COMPANY_VERIFY_STATUS = [CompanyStatus.VERIFICATION_PROCESS];
export const COMPANY_REJECT_STATUS = [CompanyStatus.VERIFICATION_PROCESS];
export const COMPANY_ACTIVATE_STATUS = [CompanyStatus.VERIFIED];
