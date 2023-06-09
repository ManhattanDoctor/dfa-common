import { TransportEvent } from "@ts-core/common";

export class VotingClosedEvent extends TransportEvent<number>{
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = 'VotingClosedEvent';

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor() {
        super(VotingClosedEvent.NAME);
    }
}
