import { ITraceable } from '@ts-core/common';
import { Company } from '../../company';
import { User } from '../../user';

export interface IInitDto extends ITraceable { }

export interface IInitDtoResponse {
    user: User;
    company?: Company;
}
