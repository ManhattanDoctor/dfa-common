import { LedgerEvent, ILedgerEventDto, LedgerEventDefault } from '../LedgerEvent';

export class VotingFinishedEvent extends LedgerEventDefault {
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

    constructor(data: ILedgerEventDto) {
        super(VotingFinishedEvent.NAME, data);
    }
}
