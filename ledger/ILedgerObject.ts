import { IUIDable } from '@ts-core/common';

export interface ILedgerObject extends IUIDable {}

export enum LedgerObjectType {
    USER = 'USER',
    COMPANY = 'COMPANY',
    PROJECT = 'PROJECT',
}