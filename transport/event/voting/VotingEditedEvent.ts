import { LedgerEvent } from '../LedgerEvent';
import { LedgerVotingEvent, ILedgerVotingEventDto } from '../LedgerVotingEvent';

export class VotingEditedEvent extends LedgerVotingEvent {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.VOTING_EDITED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ILedgerVotingEventDto) {
        super(VotingEditedEvent.NAME, data);
    }
}
