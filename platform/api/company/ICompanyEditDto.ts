import { ITraceable } from '@ts-core/common';
import { Company, CompanyPreferences, CompanyStatus } from '../../company';

export interface ICompanyEditDto extends ITraceable {
    status?: CompanyStatus;
    preferences?: Partial<CompanyPreferences>;
}
export declare type ICompanyEditDtoResponse = Company;
