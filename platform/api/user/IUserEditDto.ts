import { ITraceable } from '@ts-core/common';
import { User, UserAccount, UserPreferences, UserStatus } from '../../user';

export interface IUserEditDto extends ITraceable {
    uid?: string | number;
    status?: UserStatus;

    preferences?: Partial<UserPreferences>;
}
export declare type IUserEditDtoResponse = User;
