import { IUIDable } from '@ts-core/common';

export interface ILedgerObject extends IUIDable {}

export enum LedgerObjectType {
    USER = 'USER',
    COIN = 'COIN',
    VOTING = 'VOTING',
    COMPANY = 'COMPANY',
    PROJECT = 'PROJECT',
}