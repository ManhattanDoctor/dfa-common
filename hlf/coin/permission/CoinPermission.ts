export enum CoinPermissionType {
    AMOUNT = 'AMOUNT',
    WHITELIST = 'WHITELIST',
    BLACKLIST = 'BLACKLIST',
}
export interface ICoinPermission {
    type: CoinPermissionType;
}
