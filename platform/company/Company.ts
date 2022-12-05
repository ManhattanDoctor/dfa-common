import { Type } from 'class-transformer';
import { CompanyStatus } from './CompanyStatus';
import { CompanyPreferences } from './CompanyPreferences';
import { CoinBalance } from '../coin/CoinBalance';
import { ILedgreable } from '../ILedgerable';

export class Company implements ILedgreable {
    id: number;
    status: CompanyStatus;
    ledgerUid: string;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;

    @Type(() => CompanyPreferences)
    preferences: CompanyPreferences;

    balances?: Array<CoinBalance>;
}

