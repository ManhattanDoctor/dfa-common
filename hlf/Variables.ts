import { UserUtil } from "@hlf-core/common";
import { CoinUtil } from "@hlf-core/coin";
import { TransportCryptoManagerEd25519 } from "@ts-core/common";
import { User } from "./user";
import * as _ from 'lodash';

let transaction = { date: new Date(2000), hash: _.padStart('0', 64, '0') };
let user = UserUtil.seed(User, transaction.date, transaction.hash);

export const Variables = {
    seed: {

        cryptoKey: {
            value: 'e365007e85508c6b44d5101a1d59d0061a48fd1bcd393186ccb5e7ae938a59a8',
            algorithm: TransportCryptoManagerEd25519.ALGORITHM,
        },
        coin: {
            uid: CoinUtil.createUid('RUB', 2, user.uid),
            amount: Number(100_000).toString(),
            coinId: 'RUB',
            decimals: 2,
            ownerUid: user.uid
        },
        user,
        transaction,
    }
}