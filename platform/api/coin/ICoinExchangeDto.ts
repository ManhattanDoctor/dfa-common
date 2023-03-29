
import { CoinBalance } from '../../coin/CoinBalance';
import { ITraceable } from '@ts-core/common';

export interface ICoinExchangeGetDto extends ITraceable {
    to: string;
    from: string;
}

export interface ICoinExchangeGetDtoResponse {
    to: CoinBalance;
    from: CoinBalance;
    rate: string;
}

export interface ICoinExchangeDto extends ITraceable {
    to: string;
    from: string;
    rate: string;
    amount: string;
}
