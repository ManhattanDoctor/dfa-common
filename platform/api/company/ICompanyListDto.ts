import { IFilterableProperties, IPaginable, IPagination, ITraceable } from '@ts-core/common';
import { Company, CompanyPreferences } from '../../company';

export interface ICompanyListDto extends IPaginable<Company>, ITraceable {
    preferences?: IFilterableProperties<CompanyPreferences>;
}

export interface ICompanyListDtoResponse extends IPagination<Company> { }
