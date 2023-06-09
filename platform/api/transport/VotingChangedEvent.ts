import { TransportEvent } from "@ts-core/common";
import { VotingCompany } from "../../voting/company";

export class VotingChangedEvent extends TransportEvent<VotingCompany>{
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = 'VotingChangedEvent';

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: VotingCompany) {
        super(VotingChangedEvent.NAME, data);
    }
}
