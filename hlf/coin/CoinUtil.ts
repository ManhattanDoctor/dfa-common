
import { CoinUtil as CoinUtilBase, ICoinUidDecomposition } from '@hlf-core/coin';
import { ClassType, UID } from '@ts-core/common';
import { ICoin } from './Coin';
import { ICoinSeries } from './CoinSeries';
import { ICoinDetails } from './CoinDetails';
import * as _ from 'lodash';

export class CoinUtil {

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static create<T extends ICoin>(classType: ClassType<T>, coinId: string, decimals: number, owner: UID, details?: ICoinDetails): T {
        let item = CoinUtilBase.create(classType, coinId, decimals, owner);
        item.details = details;
        return item;
    }

    public static createCoinId(ticker: string, data?: ICoinIdIdCreationDto): string {
        let item = ticker;
        if (!_.isNil(data?.series)) {
            item += `.${data.series.uid}.${data.series.index}`;
        }
        return item;;
    }

    public static decomposeUid(coin: UID): ICoinIdDecomposition {
        let { coinId, decimals, ownerUid } = CoinUtilBase.decomposeUid(coin);

        let array = coinId.split('.');
        let length = array.length;

        let item = { ticker: array[0], decimals, ownerUid, coinId } as any;
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
    /*
    if (CoinUtil.typeToPostfix.has(data?.type)) {
        item += `.${CoinUtil.typeToPostfix.get(data.type)}`;
    }
    let type = this.postfixToType.has(array[1]) ? this.postfixToType.get(array[1]) : 'FUNGIBLE';      
    private static _typeToPostfix: Map<string, string>;
    private static _postfixToType: Map<string, string>;
    private static get typeToPostfix(): Map<string, string> {
        if (_.isNil(this._typeToPostfix)) {
            let item = this._typeToPostfix = new Map();
            item.set('NON_FUNGIBLE', 'NF');
        }
        return this._typeToPostfix;
    }
    private static get postfixToType(): Map<string, string> {
        if (_.isNil(this._postfixToType)) {
            let item = this._postfixToType = new Map();
            for (let [key, value] of this.typeToPostfix.entries()) item.set(value, key);
        }
        return this._postfixToType;
    }
    */
}


export interface ICoinIdIdCreationDto {
    series?: ICoinSeries;
}
export interface ICoinIdDecomposition extends ICoinUidDecomposition {
    ticker: string;
    series?: ICoinSeries;
}

