import { CoinBalance } from '@project/common/platform/coin/CoinBalance';
import { Type } from 'class-transformer';
import { LedgerCoinId } from '../../ledger/coin/LedgerCoinId';

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

    balance?: CoinBalance;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;
}

