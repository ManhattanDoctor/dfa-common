import { IOpenIdResourceValidationOptions } from "@ts-core/openid-common";

enum Resource {
    USER = 'user'
}
enum Scope {
    ADD = 'add',
    READ = 'read',
    EDIT = 'edit',
    REMOVE = 'remove',
}

type ResourcePermission = typeof ResourcePermission[keyof typeof ResourcePermission]
export const ResourcePermission = {
    USER_READ: `${Resource.USER}:${Scope.READ}`,
}

/*
export enum ResourcePermission {
    USER_READ = `${Resource.USER}:${Scope.READ}`,
    USER_EDIT = `${Resource.USER}:${Scope.EDIT}`,
}
    */

export function getResourceValidationOptions(item: ResourcePermission): IOpenIdResourceValidationOptions {
    let index = item.split(':');
    return { name: index[0], scope: index.slice(1) }
}
