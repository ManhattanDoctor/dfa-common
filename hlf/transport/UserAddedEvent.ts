import { TransformUtil, TransportEvent } from '@ts-core/common';
import { Event } from './Event';
import { User } from '../user';
import { IInitiatedDto, InitiatedDto } from '@hlf-core/common';
import { IsDefined, ValidateNested } from 'class-validator';

export class UserAddedEvent extends TransportEvent<IUserAddedEventDto> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = Event.USER_ADDED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: IUserAddedEventDto) {
        super(UserAddedEvent.NAME, TransformUtil.toClass(UserAddedEventDto, data));
    }
}

export interface IUserAddedEventDto extends IInitiatedDto {
    user: User;
}

export class UserAddedEventDto extends InitiatedDto implements IUserAddedEventDto {
    @IsDefined()
    @ValidateNested()
    user: User;
}
