import * as _ from 'lodash';

export class CoinUtil {
    // --------------------------------------------------------------------------
    //
    // 	Static Methods
    //
    // --------------------------------------------------------------------------

    public static getCoinRoom(id: number): string {
        return `coin${id}`;
    }

    public static getCoinBalanceRoom(objectUid: string): string {
        return `coinBalance${objectUid}`;
    }
}

