import { TransportEvent } from "@ts-core/common";

export class VotingOpenedEvent extends TransportEvent<number>{
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = 'VotingOpenedEvent';

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor() {
        super(VotingOpenedEvent.NAME);
    }
}
