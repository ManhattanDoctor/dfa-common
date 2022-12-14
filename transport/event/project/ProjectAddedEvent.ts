
import { LedgerEvent, LedgerEventDefault } from '../LedgerEvent';
import { ILedgerVotingEventDto } from '../LedgerVotingEvent';

export class ProjectAddedEvent extends LedgerEventDefault {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.PROJECT_ADDED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: IProjectAddedDto) {
        super(ProjectAddedEvent.NAME, data);
    }
}

export interface IProjectAddedDto extends ILedgerVotingEventDto {
    uid: string;
}
