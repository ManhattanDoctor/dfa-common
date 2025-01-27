
import { Type } from 'class-transformer';
import { ILedgreable } from '../ILedgerable';

export class Coin implements ILedgreable {
    id: number;
    coinId: string;
    decimals: number;
    companyId: number;
    ledgerUid: string;

    held: string;
    inUse: string;
    total: string;
    burned: string;
    emitted: string;

    @Type(() => Date)
    created: Date;

    @Type(() => Date)
    updated: Date;
}

