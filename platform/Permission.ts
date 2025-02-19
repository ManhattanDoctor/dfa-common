import { IOpenIdResourceValidationOptions } from "@ts-core/openid-common";

export enum ResourcePermission {
    USER_ADD = 'user:add',
    USER_READ = 'user:read',
    USER_EDIT = 'user:edit',
    USER_LIST = 'user:list',
    //
    COMPANY_ADD = 'company:add',
    COMPANY_READ = 'company:read',
    COMPANY_EDIT = 'company:edit',
    COMPANY_LIST = 'company:list',
    COMPANY_REJECT = 'company:reject',
    COMPANY_APPROVE = 'company:approve',
}

export function getResourceValidationOptions(item: ResourcePermission): IOpenIdResourceValidationOptions {
    let index = item.split(':');
    return { name: index[0], scope: index.slice(1) }
}