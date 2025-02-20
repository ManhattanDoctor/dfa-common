import { ITraceable } from '@ts-core/common';
import { Company, CompanyPreferences } from '../../company';

export interface ICompanyEditDto extends ITraceable {
    preferences?: Partial<CompanyPreferences>;
}
export declare type ICompanyEditDtoResponse = Company;
