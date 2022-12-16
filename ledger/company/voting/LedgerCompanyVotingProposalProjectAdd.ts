import { IsString, Matches, IsNumberString, IsInt } from 'class-validator';
import { LedgerCompanyVotingProposal, LedgerCompanyVotingProposalType } from "./LedgerCompanyVotingProposal";
import { LedgerUser } from '../../user/LedgerUser';
import { RegExpUtil } from '../../../util/RegExpUtil';

export class LedgerCompanyVotingProposalProjectAdd extends LedgerCompanyVotingProposal {
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
        this.type = LedgerCompanyVotingProposalType.PROJECT_ADD;
    }
}
