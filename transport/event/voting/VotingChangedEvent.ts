import { LedgerVotingStatus } from '../../../ledger/voting';
import { LedgerEvent, ILedgerEventDto, LedgerEventDefault } from '../LedgerEvent';

export class VotingChangedEvent extends LedgerEventDefault {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.VOTING_CHANGED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: IVotingChangedEventDto) {
        super(VotingChangedEvent.NAME, data);
    }
}

export interface IVotingChangedEventDto extends ILedgerEventDto {
    oldStatus: LedgerVotingStatus;
    newStatus: LedgerVotingStatus;
    oldStepIndex: number;
    newStepIndex: number;
}
