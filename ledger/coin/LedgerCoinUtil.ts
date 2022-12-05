import { MathUtil, MathUtilConfig } from '@ts-core/common';
import * as _ from 'lodash';

export class LedgerCoinUtil {
    // --------------------------------------------------------------------------
    //
    // 	Transform Methods
    //
    // --------------------------------------------------------------------------

    public static toCent(amount: string, decimals: number): string {
        if (_.isNil(amount) || _.isNil(decimals)) {
            return null;
        }

        LedgerCoinUtil.config = { precision: 100, toExpPos: 100, toExpNeg: -100 };
        let constructor = MathUtil.create();
        let value = MathUtil.pow('10', decimals.toString());
        let item = new constructor(MathUtil.multiply(amount, value)).toDecimalPlaces(0).toString();
        LedgerCoinUtil.config = null;
        return item;
    }

    public static fromCent(amount: string, decimals: number): string {
        if (_.isNil(amount) || _.isNil(decimals)) {
            return null;
        }
        LedgerCoinUtil.config = { precision: 100, toExpPos: 100, toExpNeg: -100 };
        let value = MathUtil.pow('10', decimals.toString());
        let item = MathUtil.divide(amount, value);
        LedgerCoinUtil.config = null;
        return item;
    }

    // --------------------------------------------------------------------------
    //
    // 	Private Static Methods
    //
    // --------------------------------------------------------------------------

    private static get config(): MathUtilConfig {
        return MathUtil.config;
    }

    private static set config(item: MathUtilConfig) {
        MathUtil.config = _.isNil(item) ? { toExpNeg: -100, toExpPos: 100, precision: 100 } : item;
    }
}
