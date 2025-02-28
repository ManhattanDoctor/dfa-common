
import { CoinUtil as CoinUtilBase, ICoinUidDecomposition as ICoinUidDecompositionBase } from '@hlf-core/coin';
import { UID } from '@ts-core/common';
import { CoinType } from './Coin';
import { ICoinSeries } from './CoinSeries';
import * as _ from 'lodash';

export class CoinUtil {

        // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static TICKER_MIN_LENGTH = 1;
    public static TICKER_MAX_LENGTH = 16;

    public static TICKER_PATTERN = `[A-Z0-9]{${CoinUtil.TICKER_MIN_LENGTH},${CoinUtil.TICKER_MAX_LENGTH}}`;
    public static TICKER_REG_EXP = new RegExp(`^${CoinUtil.TICKER_PATTERN}$`);

    private static _typeToPostfix: Map<CoinType, string>;
    private static _postfixToType: Map<string, CoinType>;

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static createUid(coinId: string, decimals: number, owner: UID): string {
        return CoinUtilBase.createUid(coinId, decimals, owner);
    }

    public static createCoinId(item: ICoinId): string {
        let { ticker, type, series } = item;
        let value = ticker;
        if (CoinUtil.typeToPostfix.has(type)) {
            value += `.${CoinUtil.typeToPostfix.get(type)}`;
        }
        if (!_.isNil(series)) {
            value += `.${series.uid}.${series.index}`;
        }
        return value;
    }

    public static decomposeUid(coin: UID): ICoinUidDecomposition {
        let { coinId, decimals, ownerUid } = CoinUtilBase.decomposeUid(coin);

        let array = coinId.split('.');
        let length = array.length;

        let type = this.postfixToType.has(array[1]) ? this.postfixToType.get(array[1]) : CoinType.FT;
        let item = { ticker: array[0], decimals, ownerUid, coinId, type } as any
        if (length > 2) {
            item.series = { uid: array[length - 2], index: Number(array[length - 1]) };
        }
        return item;
    }

    // --------------------------------------------------------------------------
    //
    //  Private Properties
    //
    // --------------------------------------------------------------------------

    private static get typeToPostfix(): Map<CoinType, string> {
        if (_.isNil(this._typeToPostfix)) {
            let item = this._typeToPostfix = new Map();
            item.set(CoinType.NFT, 'NF');
        }
        return this._typeToPostfix;
    }

    private static get postfixToType(): Map<string, CoinType> {
        if (_.isNil(this._postfixToType)) {
            let item = this._postfixToType = new Map();
            for (let [key, value] of this.typeToPostfix.entries()) item.set(value, key);
        }
        return this._postfixToType;
    }
}

export interface ICoinId {
    type: CoinType;
    ticker: string;
    series?: ICoinSeries;
}

export interface ICoinUidDecomposition extends ICoinId, ICoinUidDecompositionBase { }