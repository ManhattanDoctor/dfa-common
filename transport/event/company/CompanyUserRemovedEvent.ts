import { LedgerEvent } from '../LedgerEvent';
import { LedgerVotingEvent, ILedgerVotingEventDto } from '../LedgerVotingEvent';

export class CompanyUserRemovedEvent extends LedgerVotingEvent {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.USER_REMOVED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ILedgerVotingEventDto) {
        super(CompanyUserRemovedEvent.NAME, data);
    }
}
