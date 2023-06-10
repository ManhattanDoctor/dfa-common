import * as _ from 'lodash';
import { LedgerCoin } from '../../ledger/coin';
import { getEths } from '../../ledger/coinBridge/eth';

export class CoinUtil {
    // --------------------------------------------------------------------------
    //
    // 	Static Methods
    //
    // --------------------------------------------------------------------------

    public static getCoinRoom(id: number): string {
        return `coin${id}`;
    }

    public static getCoinBalanceRoom(id: number): string {
        return `coinBalance${id}`;
    }

    public static isHasHlfBridge(coinUid: string): boolean {
        return !_.isNil(_.find(getEths(), { id: LedgerCoin.getCoinId(coinUid) }));
    }
}

