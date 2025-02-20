import { KeycloakResources, KeycloakUtil } from "@ts-core/openid-common";
import { Company, CompanyStatus } from "../company";
import { getResourceValidationOptions, IResourcePermissionValidationOptions, ResourcePermission } from "../Permission";
import { CompanyStatusInvalidError, CompanyUndefinedError } from "../Error";
import * as _ from "lodash";

export class CompanyUtil {

    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------

    public static validate(item: Company, statuses: Array<CompanyStatus>, permission: IResourcePermissionValidationOptions, isThrowError?: boolean): boolean {
        try {
            CompanyUtil.validateStatus(item, statuses);
            CompanyUtil.validatePermission(permission);
            return true;
        }
        catch (error) {
            if (!isThrowError) {
                return false;
            }
            throw error;
        }
    }

    public static validateStatus(item: Company, status: CompanyStatus | Array<CompanyStatus>): void {
        if (_.isNil(status)) {
            return;
        }
        status = !_.isArray(status) ? [status] : status;
        if (!_.isEmpty(status) && !status.includes(item.status)) {
            throw new CompanyStatusInvalidError({ value: item.status, expected: status })
        }
    }

    public static validatePermission(options: IResourcePermissionValidationOptions): void {
        KeycloakUtil.validateResourceScope(getResourceValidationOptions(options.permission), options.resources);
    }

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public static isCanVerify(item: Company, resources: KeycloakResources, isThrowError: boolean): boolean {
        return CompanyUtil.validate(item, COMPANY_VERIFY_STATUS, { permission: COMPANY_VERIFY_PERMISSION, resources }, isThrowError);
    }
    public static isCanToVerify(item: Company, resources: KeycloakResources, isThrowError: boolean): boolean {
        return CompanyUtil.validate(item, COMPANY_TO_VERIFY_STATUS, { permission: COMPANY_TO_VERIFY_PERMISSION, resources }, isThrowError);
    }
}

export const COMPANY_ACTIVATE_STATUS = [CompanyStatus.VERIFIED];

export const COMPANY_EDIT_STATUS = [CompanyStatus.DRAFT, CompanyStatus.VERIFIED, CompanyStatus.REJECTED];
export const COMPANY_EDIT_PERMISSION = ResourcePermission.COMPANY_READ;

export const COMPANY_TO_VERIFY_STATUS = [CompanyStatus.DRAFT, CompanyStatus.REJECTED];
export const COMPANY_TO_VERIFY_PERMISSION = ResourcePermission.COMPANY_READ;

export const COMPANY_VERIFY_STATUS = [CompanyStatus.VERIFICATION_PROCESS];
export const COMPANY_VERIFY_PERMISSION = ResourcePermission.COMPANY_VERIFY;

export const COMPANY_REJECT_STATUS = [CompanyStatus.VERIFICATION_PROCESS];
export const COMPANY_REJECT_PERMISSION = ResourcePermission.COMPANY_REJECT;

