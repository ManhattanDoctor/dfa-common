import { IsString, IsBoolean } from 'class-validator';
import { LedgerVotingCompanyProposal, LedgerVotingCompanyProposalType } from "./LedgerVotingCompanyProposal";
import * as _ from 'lodash';

export class LedgerVotingCompanyProposalSelect extends LedgerVotingCompanyProposal {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsString({ each: true })
    public items: Array<string>;

    @IsBoolean()
    public isMultiple: boolean;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor() {
        super();
        this.type = LedgerVotingCompanyProposalType.SELECT;
    }
}
