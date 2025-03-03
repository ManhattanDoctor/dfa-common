
import { ITraceable } from '@ts-core/common';
import { Coin } from '../../coin';
import { ICoinPermission } from '../../../hlf/coin/permission';
import { CoinType, ICoinSeries } from '../../../hlf/coin';
import { ICoinData } from '../../../hlf/coin/data';

export interface ICoinAddDto extends ITraceable {
    name: string;
    type: CoinType;
    ticker: string;
    decimals: number;
    
    data?: ICoinData;
    series?: ICoinSeries;
    permissions?: Array<ICoinPermission>;
}
export declare type ICoinAddDtoResponse = Coin;