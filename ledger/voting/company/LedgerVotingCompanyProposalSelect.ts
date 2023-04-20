import { IsString, Matches, ArrayMaxSize, ArrayNotEmpty, Length, IsBoolean } from 'class-validator';
import { LedgerVotingCompanyProposal, LedgerVotingCompanyProposalType } from "./LedgerVotingCompanyProposal";
import * as _ from 'lodash';
import { RegExpUtil } from '../../../util/RegExpUtil';
import { LEDGER_VOTING_LIST_DATA_MAX_ITEM_LENGTH, LEDGER_VOTING_LIST_DATA_MAX_LENGTH, LEDGER_VOTING_LIST_DATA_MIN_ITEM_LENGTH } from '../LedgerVotingList';

export class LedgerVotingCompanyProposalSelect extends LedgerVotingCompanyProposal {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(RegExpUtil.DESCRIPTION_REG_EXP)
    public name: string;

    @IsString({ each: true })
    @Length(LEDGER_VOTING_LIST_DATA_MIN_ITEM_LENGTH, LEDGER_VOTING_LIST_DATA_MAX_ITEM_LENGTH, { each: true })
    @ArrayMaxSize(LEDGER_VOTING_LIST_DATA_MAX_LENGTH)
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
