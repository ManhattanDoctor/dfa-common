import { Type } from 'class-transformer';
import { CompanyStatus } from './CompanyStatus';
import { CompanyPreferences } from './CompanyPreferences';
import { CoinBalance } from '../coin/CoinBalance';
import { ILedgreable } from '../ILedgerable';
import { LedgerCompanyRegulation } from '../../ledger/company/LedgerCompanyRegulation';

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

    @Type(() => LedgerCompanyRegulation)
    regulations: Array<LedgerCompanyRegulation>;

    balances?: Array<CoinBalance>;
}

