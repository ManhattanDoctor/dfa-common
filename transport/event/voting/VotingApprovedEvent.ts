import { LedgerEvent, ILedgerEventDto, LedgerEventDefault } from '../LedgerEvent';

export class VotingApprovedEvent extends LedgerEventDefault {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.VOTING_APPROVED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ILedgerEventDto) {
        super(VotingApprovedEvent.NAME, data);
    }
}
