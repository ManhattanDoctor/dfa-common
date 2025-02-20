import { KeycloakUtil } from "@ts-core/openid-common";
import { getResourceValidationOptions, IResourcePermissionValidationOptions } from "../Permission";
import * as _ from "lodash";

export class PermissionUtil {

    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------

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