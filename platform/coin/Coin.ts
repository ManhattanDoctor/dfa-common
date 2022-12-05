
import { Type } from 'class-transformer';
import { LedgerCoinId } from '../../ledger/coin/LedgerCoinId';
import { CoinBalance } from './CoinBalance';

export class Coin {
    id: number;
    coinId: LedgerCoinId;
    decimals: number;
    companyId: number;
    ledgerUid: string;

    held: string;
    inUse: string;
    total: string;
    burned: string;
    emitted: string;

    balances?: Array<CoinBalance>;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;
}

