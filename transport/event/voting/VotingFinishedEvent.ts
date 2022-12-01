import { LedgerVotingStatus } from '../../../ledger/voting';
import { LedgerEvent } from '../LedgerEvent';
import { LedgerVotingEvent, ILedgerVotingEventDto } from '../LedgerVotingEvent';

export class VotingFinishedEvent extends LedgerVotingEvent {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.VOTING_FINISHED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: IVotingFinishedEventDto) {
        super(VotingFinishedEvent.NAME, data);
    }
}

export interface IVotingFinishedEventDto extends ILedgerVotingEventDto {
    status: LedgerVotingStatus;
}
