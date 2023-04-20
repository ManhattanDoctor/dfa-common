import { IsString, ArrayMaxSize, ArrayNotEmpty, Length, IsBoolean } from 'class-validator';
import { LedgerVotingCompanyProposal, LedgerVotingCompanyProposalType } from "./LedgerVotingCompanyProposal";
import * as _ from 'lodash';

export const LEDGER_VOTING_COMPANY_PROPOSAL_SELECT_MAX_ITEMS = 16;
export const LEDGER_VOTING_COMPANY_PROPOSAL_SELECT_MIN_ITEM_LENGTH = 1;
export const LEDGER_VOTING_COMPANY_PROPOSAL_SELECT_MAX_ITEM_LENGTH = 256;

export class LedgerVotingCompanyProposalSelect extends LedgerVotingCompanyProposal {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsString({ each: true })
    @Length(LEDGER_VOTING_COMPANY_PROPOSAL_SELECT_MIN_ITEM_LENGTH, LEDGER_VOTING_COMPANY_PROPOSAL_SELECT_MAX_ITEM_LENGTH, { each: true })
    @ArrayMaxSize(LEDGER_VOTING_COMPANY_PROPOSAL_SELECT_MAX_ITEMS)
    @ArrayNotEmpty()
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
