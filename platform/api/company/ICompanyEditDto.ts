import { ITraceable } from '@ts-core/common';
import { Company, CompanyPreferences, CompanyTaxDetails } from '../../company';

export interface ICompanyEditDto extends ITraceable {
    details?: CompanyTaxDetails
    preferences?: Partial<CompanyPreferences>;
}
export declare type ICompanyEditDtoResponse = Company;
