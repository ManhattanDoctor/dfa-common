
import { ITraceable } from '@ts-core/common';
import { CompanyPreferences } from '../../company';

export interface ICompanyAddDto extends ITraceable {
    preferences: Partial<CompanyPreferences>;
    paymentAggregator?: Partial<PaymentAggregator>;
}
export declare type ICompanyAddDtoResponse = UserCompany;
