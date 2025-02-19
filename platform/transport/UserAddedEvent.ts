import { TransportEvent } from "@ts-core/common";
import { User } from "../user";

export class UserAddedEvent extends TransportEvent<User> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = 'UserAddedEvent';

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: User) {
        super(UserAddedEvent.NAME, data);
    }
}
