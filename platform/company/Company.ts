import { Type } from 'class-transformer';
import { CompanyStatus } from './CompanyStatus';
import { CompanyPreferences } from './CompanyPreferences';

export class Company {
    id: number;
    status: CompanyStatus;
    ledgerUid?: string;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;

    @Type(() => CompanyPreferences)
    preferences: CompanyPreferences;
}

