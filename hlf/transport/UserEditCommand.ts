import { TransformUtil } from '@ts-core/common';
import { IsEnum, Matches, IsOptional, ValidateNested } from 'class-validator';
import { HlfTransportCommandAsync, CryptoKey, ICryptoKey, UserUtil, IInitiatedDto, InitiatedDto } from '@hlf-core/common';
import { CommandName } from './Command';
import { User, UserRole, UserStatus } from '../user';
import { Type } from 'class-transformer';

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

export interface IUserEditDto extends IInitiatedDto {
    uid: string;
    roles?: Array<UserRole>;
    status?: UserStatus;
    cryptoKey?: ICryptoKey;
}

export class UserEditDto extends InitiatedDto implements IUserEditDto {
    @Matches(UserUtil.UID_REG_EXP)
    public uid: string;

    @IsOptional()
    @IsEnum(UserRole, { each: true })
    public roles?: Array<UserRole>;

    @IsOptional()
    @IsEnum(UserStatus)
    public status?: UserStatus;

    @IsOptional()
    @Type(() => CryptoKey)
    @ValidateNested()
    public cryptoKey?: CryptoKey;
}