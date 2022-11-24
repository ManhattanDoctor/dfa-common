
import { LedgerUser } from './user/LedgerUser';
import { LedgerProject } from './project/LedgerProject';
import { LedgerCompany } from './company/LedgerCompany';
import { UID, getUid } from '@ts-core/common';
import { LedgerObjectType } from './ILedgerObject';

export function IsUser(uid: UID): boolean {
    return LedgerUser.UID_REG_EXP.test(getUid(uid));
}

export function IsCompany(uid: UID): boolean {
    return LedgerCompany.UID_REG_EXP.test(getUid(uid));
}

export function IsProject(uid: UID): boolean {
    return LedgerProject.UID_REG_EXP.test(getUid(uid));
}

export function getType(uid: UID): LedgerObjectType {
    if (IsUser(uid)) {
        return LedgerObjectType.USER;
    }
    if (IsCompany(uid)) {
        return LedgerObjectType.COMPANY;
    }
    if (IsProject(uid)) {
        return LedgerObjectType.PROJECT;
    }
    return null;
}



