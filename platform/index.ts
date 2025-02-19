export * from './Error';
export * from './Permission';
//
export function getSocketUserRoom(id: string): string {
    return `user${id}`;
}
export function getSocketCompanyRoom(id: number): string {
    return `company${id}`;
}