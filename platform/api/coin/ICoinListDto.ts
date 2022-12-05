import { IPaginable, IPagination } from '@ts-core/common';
import { ITraceable } from '@ts-core/common';
import { Coin } from '../../coin';

export interface ICoinListDto extends IPaginable<Coin>, ITraceable { }

export interface ICoinListDtoResponse extends IPagination<Coin> { }
