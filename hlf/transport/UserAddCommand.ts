import { TransformUtil } from '@ts-core/common';
import { Type } from 'class-transformer';
import { IsEnum, ValidateNested, IsDefined, IsOptional } from 'class-validator';
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
    @IsOptional()
    @IsEnum(UserRole, { each: true })
    roles?: Array<UserRole>;

    @IsDefined()
    @Type(() => CryptoKey)
    @ValidateNested()
    cryptoKey: CryptoKey;
}
