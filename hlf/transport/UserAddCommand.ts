import { TransformUtil } from '@ts-core/common';
import { IsEnum, IsOptional } from 'class-validator';
import { HlfTransportCommandAsync } from '@hlf-core/common';
import { CommandName } from './Command';
import { User, UserRole } from '../User';

export class UserAddCommand extends HlfTransportCommandAsync<IUserAddDto, User> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = CommandName.USER_ADD;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IUserAddDto) {
        super(UserAddCommand.NAME, TransformUtil.toClass(UserAddDto, request));
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

export interface IUserAddDto {
    roles?: Array<UserRole>;
}

export class UserAddDto implements IUserAddDto {
    @IsOptional()
    @IsEnum(UserRole, { each: true })
    roles?: Array<UserRole>;
}
