import { Coin as CoinBase, ICoin as ICoinBase } from "@hlf-core/coin";
import { ICoinDetails } from "./CoinDetails";
import * as _ from 'lodash';

export interface ICoin<T extends ICoinDetails = ICoinDetails> extends ICoinBase {
    details?: T;
}

export class Coin<T extends ICoinDetails = ICoinDetails> extends CoinBase implements ICoin<T> {
    public details?: T;
}