import { LedgerCoinId } from '../../../ledger/coin';
import { IsString } from 'class-validator';

export interface ICoinAmount {
    value: string;
    coinId: LedgerCoinId;
}

export class CoinAmount implements ICoinAmount {
    @IsString()
    value: string;

    @IsString()
    coinId: LedgerCoinId;
}
