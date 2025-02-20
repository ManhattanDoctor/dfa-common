import { OpenIdResources } from "@ts-core/openid-common";
import { ResourcePermission } from "../Permission";
import { PermissionUtil } from "../util";
import * as _ from "lodash";

export class UserUtil {
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public static isCanEdit(resources: OpenIdResources, isThrowError: boolean): boolean {
        return PermissionUtil.validatePermission({ permission: ResourcePermission.USER_EDIT, resources }, isThrowError);
    }
    public static isCanRead(resources: OpenIdResources, isThrowError: boolean): boolean {
        return PermissionUtil.validatePermission({ permission: ResourcePermission.USER_EDIT, resources }, isThrowError);
    }
    public static isCanList(resources: OpenIdResources, isThrowError: boolean): boolean {
        return PermissionUtil.validatePermission({ permission: ResourcePermission.USER_LIST, resources }, isThrowError);
    }

}
