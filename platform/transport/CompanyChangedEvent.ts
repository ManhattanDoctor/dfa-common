import { TransportEvent } from "@ts-core/common";
import { Company } from "../company";

export class CompanyChangedEvent extends TransportEvent<Company>{
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = 'CompanyChangedEvent';

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: Company) {
        super(CompanyChangedEvent.NAME, data);
    }
}
