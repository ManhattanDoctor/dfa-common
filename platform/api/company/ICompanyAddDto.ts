
import { ITraceable } from '@ts-core/common';
import { CompanyPreferences } from '../../company/CompanyPreferences';
import { UserCompany } from '../../user/UserCompany';

export interface ICompanyAddDto extends ITraceable {
    preferences: Partial<CompanyPreferences>;
}
export declare type ICompanyAddDtoResponse = UserCompany;
