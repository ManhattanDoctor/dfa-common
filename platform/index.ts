export * from './Error';
export * from './Action';
export * from './Permission';
//
export function getSocketUserRoom(id: string): string {
    return `user${id}`;
}
export function getSocketCompanyRoom(id: number): string {
    return `company${id}`;
}
export function getSocketCoinRoom(id: number): string {
    return `coin${id}`;
}
export function getSocketCoinBalanceRoom(ownerUid: string): string {
    return `coinBalance/${ownerUid}`;
}
