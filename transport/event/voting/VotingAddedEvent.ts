import { LedgerEvent } from '../LedgerEvent';
import { LedgerVotingEvent, ILedgerVotingEventDto } from '../LedgerVotingEvent';

export class VotingAddedEvent extends LedgerVotingEvent {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.VOTING_ADDED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ILedgerVotingEventDto) {
        super(VotingAddedEvent.NAME, data);
    }
}
