
import { Type } from 'class-transformer';
import { LedgerCoinId } from '../../ledger/coin/LedgerCoinId';
import { ILedgreable } from '../ILedgerable';

export class Coin implements ILedgreable {
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

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;
}

