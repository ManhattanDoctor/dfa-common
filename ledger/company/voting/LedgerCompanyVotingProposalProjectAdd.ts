import { IsString, Matches, IsNumberString } from 'class-validator';
import { LedgerCompanyVotingProposal } from "./LedgerCompanyVotingProposal";
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
    public description: string;

    @IsString()
    public coinId: string;

    @IsNumberString()
    public amount: string;

}
