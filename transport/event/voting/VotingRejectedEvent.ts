import { LedgerEvent } from '../LedgerEvent';
import { LedgerVotingEvent, ILedgerVotingEventDto } from '../LedgerVotingEvent';

export class VotingRejectedEvent extends LedgerVotingEvent {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.VOTING_REJECTED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ILedgerVotingEventDto) {
        super(VotingRejectedEvent.NAME, data);
    }
}
