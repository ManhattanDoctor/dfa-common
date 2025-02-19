import { TransportEvent } from "@ts-core/common";
import { User } from "../user";

export class UserChangedEvent extends TransportEvent<User>{
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = 'UserChangedEvent';

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: User) {
        super(UserChangedEvent.NAME, data);
    }
}
