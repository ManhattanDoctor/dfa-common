import { Type } from 'class-transformer';
import { CompanyPreferences } from './CompanyPreferences';
import { CompanyTaxDetails } from './CompanyTaxDetails';

export class Company {
    public id: number;
    public status: CompanyStatus;

    public hlfUid?: string;

    @Type(() => Date)
    public created: Date;

    @Type(() => CompanyTaxDetails)
    public details: CompanyTaxDetails;

    @Type(() => CompanyPreferences)
    public preferences: CompanyPreferences;
}

export enum CompanyStatus {
    DRAFT = 'DRAFT',
    ACTIVE = 'ACTIVE',
    VERIFIED = 'VERIFIED',
    REJECTED = 'REJECTED',
    NON_ACTIVE = 'NON_ACTIVE',
    VERIFICATION_PROCESS = 'VERIFICATION_PROCESS'
}




