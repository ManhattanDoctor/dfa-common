import { KeycloakUtil } from "@ts-core/openid-common";
import { getResourceValidationOptions, IResourcePermissionValidationOptions } from "../Permission";
import { ClassType } from "@ts-core/common";
import * as _ from "lodash";

export class PermissionUtil {

    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------

    public static validateStatus<T>(Error: ClassType<Error>, item: IStatusable<T>, status: T | Array<T>, isThrowError: boolean): boolean {
        if (_.isNil(status)) {
            return false;
        }
        try {
            status = !_.isArray(status) ? [status] : status;
            if (!_.isEmpty(status) && !status.includes(item.status)) {
                throw new Error({ value: item.status, expected: status })
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

    public static validatePermission(options: IResourcePermissionValidationOptions, isThrowError: boolean): boolean {
        try {
            KeycloakUtil.validateResourceScope(getResourceValidationOptions(options.permission), options.resources);
            return true;
        }
        catch (error) {
            if (isThrowError) {
                throw error;
            }
            return false;
        }
    }
}

interface IStatusable<T = string> {
    status: T;
}