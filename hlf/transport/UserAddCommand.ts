import { TransformUtil } from '@ts-core/common';
import { Type } from 'class-transformer';
import { ValidateNested, IsDefined, IsOptional, IsEnum } from 'class-validator';
import { HlfTransportCommandAsync, ICryptoKey, CryptoKey } from '@hlf-core/common';
import { CommandName } from './Command';
import { User, UserRole } from '../user';

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
    cryptoKey: ICryptoKey;
}

export class UserAddDto implements IUserAddDto {
    @IsDefined()
    @Type(() => CryptoKey)
    @ValidateNested()
    public cryptoKey: CryptoKey;

    @IsOptional()
    @IsEnum(UserRole, { each: true })
    public roles?: Array<UserRole>;
}
