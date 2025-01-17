
import { IUIDable, UID, getUid } from '@ts-core/common';
import { UserUtil, CoinUtil } from '@hlf-core/common';

export interface IObject extends IUIDable { }

export enum ObjectType {
    USER = 'USER',
    COIN = 'COIN'
}

export function IsUser(uid: UID): boolean {
    return UserUtil.IsUser(uid);
}

export function IsCoin(uid: UID): boolean {
    // return CoinUtil.I.test(getUid(uid));
    return null;
}
/*
export function IsAuction(uid: UID): boolean {
    return RegExpUtil.AUCTION_UID_REG_EXP.test(getUid(uid));
}
export function IsNickname(uid: UID): boolean {
    return RegExpUtil.NICKNAME_UID_REG_EXP.test(getUid(uid));
}
*/
export function getType(uid: UID): ObjectType {
    if (IsUser(uid)) {
        return ObjectType.USER;
    }
    if (IsCoin(uid)) {
        return ObjectType.COIN;
    }
    return null;
}