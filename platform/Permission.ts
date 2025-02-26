import { IOpenIdResourceValidationOptions, OpenIdResources, KeycloakUtil } from "@ts-core/openid-common";

export enum ResourcePermission {
    USER_ADD = 'user:add',
    USER_READ = 'user:read',
    USER_EDIT = 'user:edit',
    USER_LIST = 'user:list',
    //
    COMPANY_ADD = 'company:add',
    COMPANY_EDIT = 'company:edit',
    COMPANY_READ = 'company:read',
    COMPANY_LIST = 'company:list',
    COMPANY_SUBMIT = 'company:submit',
    COMPANY_REJECT = 'company:reject',
    COMPANY_VERIFY = 'company:verify',
    COMPANY_ACTIVATE = 'company:activate',
    //
    COIN_EMIT = 'coin:emit',
    COIN_BURN = 'coin:burn',
    COIN_ADD = 'coin:add',
    COIN_EDIT = 'coin:edit',
    COIN_READ = 'coin:read',
    COIN_LIST = 'coin:list',
    COIN_SUBMIT = 'coin:submit',
    COIN_REJECT = 'coin:reject',
    COIN_VERIFY = 'coin:verify',
    COIN_ACTIVATE = 'coin:activate',
    //
    COIN_BALANCE_READ = 'coin-balance:read',
    COIN_BALANCE_LIST = 'coin-balance:list',
}

export interface IResourcePermissionValidationOptions {
    permission: ResourcePermission;
    resources: OpenIdResources;
}

export function getResourceValidationOptions(item: ResourcePermission): IOpenIdResourceValidationOptions {
    let index = item.split(':');
    return { name: index[0], scope: index.slice(1) }
}

export function hasResourceScope(resource: ResourcePermission, resources: OpenIdResources): boolean {
    try {
        KeycloakUtil.validateResourceScope(getResourceValidationOptions(resource), resources);
        return true;
    }
    catch (error) {
        return false;
    }
}