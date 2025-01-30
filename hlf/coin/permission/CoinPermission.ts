export enum CoinPermissionType {
    AMOUNT = 'AMOUNT',
    EMISSION = 'EMISSION',
    WHITELIST = 'WHITELIST',
    BLACKLIST = 'BLACKLIST',
}

export interface ICoinPermission {
    type: CoinPermissionType;
}
