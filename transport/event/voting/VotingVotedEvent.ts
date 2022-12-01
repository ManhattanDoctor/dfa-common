import { LedgerEvent } from '../LedgerEvent';
import { ILedgerVotingEventDto, LedgerVotingEvent } from '../LedgerVotingEvent';

export class VotingVotedEvent extends LedgerVotingEvent {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.VOTING_VOTED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ILedgerVotingEventDto) {
        super(VotingVotedEvent.NAME, data);
    }
}

