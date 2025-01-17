import { CoinUtil, UserUtil } from "@hlf-core/common";
import { TransportCryptoManagerEd25519 } from "@ts-core/common";
import * as _ from 'lodash';

let transaction = {
    date: UserUtil.MAX_CREATED_DATE,
    hash: _.padStart('0', 64, '0')
}
let user = {
    uid: UserUtil.createUid(UserUtil.MAX_CREATED_DATE, _.padStart('0', 64, '0')),
    cryptoKey: {
        value: 'e365007e85508c6b44d5101a1d59d0061a48fd1bcd393186ccb5e7ae938a59a8',
        algorithm: TransportCryptoManagerEd25519.ALGORITHM,
    }
}

export const Variables = {
    seed: {
        user,
        transaction,
        coin: {
            uid: CoinUtil.createUid('RUB', 2, user.uid),
            amount: Number(100_000).toString(),
            coinId: 'RUB',
            decimals: 2,
            ownerUid: user.uid,
            balance: null
        }
    }
}