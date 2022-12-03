import { Type } from 'class-transformer';
import { Coin } from './Coin';

export class CoinBalance {
    id: number;
    held: string;
    inUse: string;
    total: string;
    ledgerUid: string;

    coin?: Coin;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;
}