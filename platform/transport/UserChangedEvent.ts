import { TransportEvent } from "@ts-core/common";
import { User } from "../user";

export class UserChangedEvent extends TransportEvent<Partial<User>> {
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

    constructor(data: Partial<User>) {
        super(UserChangedEvent.NAME, data);
    }
}
