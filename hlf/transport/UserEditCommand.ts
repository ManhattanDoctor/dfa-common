import { TransformUtil } from '@ts-core/common';
import { IsEnum, Matches, IsOptional } from 'class-validator';
import { HlfTransportCommandAsync, UserUtil } from '@hlf-core/common';
import { CommandName } from './Command';
import { User, UserRole, UserStatus } from '../user';

export class UserEditCommand extends HlfTransportCommandAsync<IUserEditDto, User> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = CommandName.USER_EDIT;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IUserEditDto) {
        super(UserEditCommand.NAME, TransformUtil.toClass(UserEditDto, request));
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: User): User {
        return TransformUtil.toClass(User, item);
    }
}

export interface IUserEditDto {
    uid: string;
    roles?: Array<UserRole>;
    status?: UserStatus;
    wallet?: string;
}

export class UserEditDto implements IUserEditDto {
    @Matches(UserUtil.UID_REG_EXP)
    uid: string;

    @IsOptional()
    @IsEnum(UserRole, { each: true })
    roles?: Array<UserRole>;

    @IsOptional()
    @IsEnum(UserStatus)
    status?: UserStatus;
}