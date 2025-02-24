import { ITraceable, IPaginable, IPagination } from '@ts-core/common';
import { CoinBalance } from '../../coin';

export interface ICoinBalanceListDto extends IPaginable<CoinBalance>, ITraceable {}

export interface ICoinBalanceListDtoResponse extends IPagination<CoinBalance> { }
