import { ClassType, TransformUtil } from "@ts-core/common";
import { ICoin, Coin } from "./Coin";
import * as _ from 'lodash';

export class CoinFactory {
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public static transform<T extends ICoin>(item: any): T {
        return TransformUtil.toClass(CoinFactory.transformClass(item), item) as T;
    }

    public static transformClass(item: ICoin): ClassType<ICoin> {
        return Coin;
    }
}