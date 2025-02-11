import { ITraceable } from '@ts-core/common';
import { User, UserPreferences, UserStatus } from '../../user';

export interface IUserEditDto extends ITraceable {
    status?: UserStatus;
    preferences?: Partial<UserPreferences>;
}
export declare type IUserEditDtoResponse = User;
