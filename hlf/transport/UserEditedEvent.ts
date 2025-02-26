
import { TransformUtil } from '@ts-core/common';
import { Event } from './Event';
import { IUserEventDto, UserEvent, UserEventDto } from './UserEvent';

export class UserEditedEvent extends UserEvent {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = Event.USER_EDITED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: IUserEventDto) {
        super(UserEditedEvent.NAME, TransformUtil.toClass(UserEventDto, data));
    }
}
