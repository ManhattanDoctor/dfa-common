import { TransportEvent } from "@ts-core/common";
import { Company } from "../company";

export class CompanyAddedEvent extends TransportEvent<Company> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = 'CompanyAddedEvent';

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: Company) {
        super(CompanyAddedEvent.NAME, data);
    }
}
