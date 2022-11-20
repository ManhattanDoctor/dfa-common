import { LedgerEvent } from '../LedgerEvent';
import { LedgerVotingEvent, ILedgerVotingEventDto } from '../LedgerVotingEvent';

export class CompanyUserEditedEvent extends LedgerVotingEvent {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.COMPANY_USER_EDITED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ILedgerVotingEventDto) {
        super(CompanyUserEditedEvent.NAME, data);
    }
}
