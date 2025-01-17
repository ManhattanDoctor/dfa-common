import { IsString, Matches, IsNumberString, IsInt } from 'class-validator';
import { LedgerVotingCompanyProposal, LedgerVotingCompanyProposalType } from "./LedgerVotingCompanyProposal";
import { LedgerUser } from '../../user/LedgerUser';
import { RegExpUtil } from '../../../util/RegExpUtil';

export class LedgerVotingCompanyProposalProjectAdd extends LedgerVotingCompanyProposal {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(LedgerUser.UID_REG_EXP)
    public ownerUid: string;

    @Matches(RegExpUtil.DESCRIPTION_REG_EXP)
    public name: string;

    @IsString()
    public coinId: string;

    @IsNumberString()
    public amount: string;

    @IsInt()
    public decimals: number;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor() {
        super();
        this.type = LedgerVotingCompanyProposalType.PROJECT_ADD;
    }
}
