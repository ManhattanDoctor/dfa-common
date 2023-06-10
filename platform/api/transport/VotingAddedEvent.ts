import { TransportEvent } from "@ts-core/common";

export class VotingAddedEvent extends TransportEvent<number>{
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = 'VotingAddedEvent';

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor() {
        super(VotingAddedEvent.NAME);
    }
}
