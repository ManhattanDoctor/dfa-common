
import { UID } from '@ts-core/common';
import { UserUtil } from '@hlf-core/common';
import { CoinUtil } from '@hlf-core/coin';

export enum ObjectType {
    USER = 'USER',
    COIN = 'COIN',
}

export function IsUser(uid: UID): boolean {
    return UserUtil.isUser(uid);
}
export function IsCoin(uid: UID): boolean {
    return CoinUtil.isCoin(uid);
}

export function getType(uid: UID): ObjectType {
    if (IsUser(uid)) {
        return ObjectType.USER;
    }
    if (IsCoin(uid)) {
        return ObjectType.COIN;
    }
    return null;
}