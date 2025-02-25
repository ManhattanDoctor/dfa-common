import { OpenIdResources } from "@ts-core/openid-common";
import { IResourcePermissionValidationOptions, ResourcePermission } from "../Permission";
import { PermissionUtil } from "../util";
import { User, UserStatus } from "./User";
import { UserStatusInvalidError } from "../Error";
import * as _ from "lodash";

export class UserUtil {

    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------

    private static validate(item: User, statuses: Array<UserStatus>, permission: IResourcePermissionValidationOptions, isThrowError?: boolean): boolean {
        return UserUtil.validateStatus(item, statuses, isThrowError) && PermissionUtil.validatePermission(permission, isThrowError);
    }
    private static validateStatus(item: User, status: UserStatus | Array<UserStatus>, isThrowError: boolean): boolean {
        if (_.isNil(status)) {
            return false;
        }
        try {
            status = !_.isArray(status) ? [status] : status;
            if (!_.isEmpty(status) && !status.includes(item.status)) {
                throw new UserStatusInvalidError({ value: item.status, expected: status })
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
        return PermissionUtil.validatePermission({ permission: ResourcePermission.USER_READ, resources }, isThrowError);
    }
    public static isCanList(resources: OpenIdResources, isThrowError: boolean): boolean {
        return PermissionUtil.validatePermission({ permission: ResourcePermission.USER_LIST, resources }, isThrowError);
    }

    public static isCanEdit(item: User, resources: OpenIdResources, isThrowError: boolean): boolean {
        return UserUtil.validate(item, USER_EDIT_STATUS, { permission: ResourcePermission.USER_EDIT, resources }, isThrowError);
    }
}

export const USER_EDIT_STATUS = [UserStatus.ACTIVE];
