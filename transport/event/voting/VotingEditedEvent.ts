
import { LedgerEvent, ILedgerEventDto, LedgerEventDefault } from '../LedgerEvent';

export class VotingEditedEvent extends LedgerEventDefault {
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

    constructor(data: IVotingEditedEventDto) {
        super(VotingEditedEvent.NAME, data);
    }
}

export interface IVotingEditedEventDto extends ILedgerEventDto {
    oldStep: number;
    newStep: number;
}
