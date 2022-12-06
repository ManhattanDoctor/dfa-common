
import { CoinBalance } from '../../coin/CoinBalance';
import { ITraceable } from '@ts-core/common';
import { LedgerCoinId } from '../../../ledger/coin/LedgerCoinId';

export interface ICoinExchangeGetDtoResponse extends ITraceable {
    to: CoinBalance;
    from: CoinBalance;
    rate: string;
}

export interface ICoinExchangeDto extends ITraceable {
    to: LedgerCoinId;
    from: LedgerCoinId;
    rate: string;
    amount: string;
}
