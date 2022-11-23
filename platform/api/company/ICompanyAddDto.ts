
import { ITraceable } from '@ts-core/common';
import { CompanyPreferences } from '../../company';
import { UserCompany } from '../../user';

export interface ICompanyAddDto extends ITraceable {
    preferences: Partial<CompanyPreferences>;
}
export declare type ICompanyAddDtoResponse = UserCompany;
