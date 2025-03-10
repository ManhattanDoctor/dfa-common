import { ITraceable } from '@ts-core/common';
import { Coin } from '../../coin';
import { CoinType, ICoinSeries } from '../../../hlf/coin';
import { ICoinData } from '../../../hlf/coin/data';
import { ICoinPermission } from '../../../hlf/coin/permission';

export interface ICoinEditDto extends ITraceable {
    name?: string;
    type?: CoinType;
    data?: ICoinData;
    ticker?: string;
    series?: ICoinSeries;
    decimals?: number;
    permissions?: Array<ICoinPermission>;
}
export declare type ICoinEditDtoResponse = Coin;
