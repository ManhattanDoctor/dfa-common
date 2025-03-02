import { OpenIdResources } from "@ts-core/openid-common";
import { IResourcePermissionValidationOptions, ResourcePermission } from "../Permission";
import { PermissionUtil } from "../util";
import { User, UserStatus } from "./User";
import { UserStatusInvalidError, UserUndefinedError } from "../Error";
import * as _ from "lodash";

export class UserUtil {

    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------

    public static validate(item: UserToValidate, statuses: UserStatus | Array<UserStatus>, permission: IResourcePermissionValidationOptions, isThrowError?: boolean): boolean {
        return UserUtil.validateStatus(item, statuses, isThrowError) && PermissionUtil.validatePermission(permission, isThrowError);
    }

    public static validateStatus(item: UserToValidate, statuses: UserStatus | Array<UserStatus>, isThrowError?: boolean): boolean {
        return UserUtil.validateObject(item) && PermissionUtil.validateStatus(UserStatusInvalidError, item, statuses, isThrowError);
    }

    public static validateObject(item: UserToValidate, isThrowError?: boolean): boolean {
        if (!_.isNil(item)) {
            return true;
        }
        if (isThrowError) {
            throw new UserUndefinedError();
        }
        return false;
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

    public static isCanEdit(item: UserToValidate, resources: OpenIdResources, isThrowError: boolean): boolean {
        return UserUtil.validate(item, USER_EDIT_STATUS, { permission: ResourcePermission.USER_EDIT, resources }, isThrowError);
    }
}

export type UserToValidate = Pick<User, 'id' | 'status'>;

export const USER_EDIT_STATUS = [UserStatus.ACTIVE];
