import { UserUtil } from "@hlf-core/common";
import { TransportCryptoManagerEd25519 } from "@ts-core/common";
import { User } from "./user";
import { CoinType, CoinUtil } from "./coin";
import * as _ from 'lodash';

let transaction = { date: new Date(+0), hash: _.padStart('0', 64, '0') };
let user = UserUtil.seed(User, transaction.date, transaction.hash);
let coinId = CoinUtil.createCoinId({ ticker: 'RUB', type: CoinType.FT });

export const Variables = {
    seed: {
        cryptoKey: {
            value: 'e365007e85508c6b44d5101a1d59d0061a48fd1bcd393186ccb5e7ae938a59a8',
            algorithm: TransportCryptoManagerEd25519.ALGORITHM,
        },
        coin: {
            uid: CoinUtil.createUid(coinId, 2, user.uid),
            amount: Number(100_000).toString(),
            decimals: 2,
            ownerUid: user.uid,
            coinId
        },
        user,
        transaction,
    }
}