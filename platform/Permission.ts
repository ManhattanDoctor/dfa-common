import { IOpenIdResourceValidationOptions, OpenIdResourceValidationOptions } from "@ts-core/openid-common";

export enum Resource {
    USER = 'user',
    COMPANY = 'company',
}
export enum ResourceScope {
    ADD = 'add',
    READ = 'read',
    EDIT = 'edit',
    REMOVE = 'remove',
    //
    LIST = 'list',
    REJECT = 'reject',
    APPROVE = 'approve',
}

export const ResourcePermission = {
    USER_ADD: `${Resource.USER}:${ResourceScope.ADD}`,
    USER_READ: `${Resource.USER}:${ResourceScope.READ}`,
    USER_EDIT: `${Resource.USER}:${ResourceScope.EDIT}`,
    USER_LIST: `${Resource.USER}:${ResourceScope.LIST}`,
    //
    COMPANY_ADD: `${Resource.COMPANY}:${ResourceScope.ADD}`,
    COMPANY_READ: `${Resource.COMPANY}:${ResourceScope.READ}`,
    COMPANY_EDIT: `${Resource.COMPANY}:${ResourceScope.EDIT}`,
    COMPANY_LIST: `${Resource.COMPANY}:${ResourceScope.LIST}`,
    COMPANY_REJECT: `${Resource.COMPANY}:${ResourceScope.REJECT}`,
    COMPANY_APPROVE: `${Resource.COMPANY}:${ResourceScope.APPROVE}`,
}

export type Permission = typeof ResourcePermission[keyof typeof ResourcePermission];
export function getResourceValidationOptions(item: Permission): IOpenIdResourceValidationOptions {
    let index = item.split(':');
    return { name: index[0], scope: index.slice(1) }
}
