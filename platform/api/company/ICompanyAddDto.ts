
import { ITraceable } from '@ts-core/common';
import { Company, CompanyPreferences, CompanyTaxDetails } from '../../company';

export interface ICompanyAddDto extends ITraceable {
    details: CompanyTaxDetails;
    preferences: CompanyPreferences;
}
export declare type ICompanyAddDtoResponse = Company;
