import { IFilterableProperties, IPaginable, IPagination, ITraceable } from '@ts-core/common';
import { User, UserPreferences } from '../../user';

export interface IUserListDto extends IPaginable<User>, ITraceable {
    preferences?: IFilterableProperties<UserPreferences>;
}

export interface IUserListDtoResponse extends IPagination<User> { }
