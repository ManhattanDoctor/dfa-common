import { IUIDable } from '@ts-core/common';
import { Type } from 'class-transformer';
import { CompanyTaxDetails } from './CompanyTaxDetails';
import { CompanyPreferences } from './CompanyPreferences';

export class Company implements IUIDable {
    public id: number;
    public uid: string;
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




