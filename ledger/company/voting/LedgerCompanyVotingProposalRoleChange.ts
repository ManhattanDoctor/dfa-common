import { Matches, ArrayNotEmpty, IsEnum } from 'class-validator';
import { LedgerCompanyRole } from '../../role/LedgerCompanyRole';
import { LedgerUser } from '../../user/LedgerUser';
import { LedgerVotingStepRoleAction } from '../../voting/step/LedgerVotingStepRole';
import { LedgerCompanyVotingProposal } from "./LedgerCompanyVotingProposal";

export class LedgerCompanyVotingProposalRoleChange extends LedgerCompanyVotingProposal {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(LedgerUser.UID_REG_EXP)
    public to: string;

    @IsEnum(LedgerVotingStepRoleAction)
    public action: string;

    @ArrayNotEmpty()
    @IsEnum(LedgerCompanyRole, { each: true })
    public roles: Array<LedgerCompanyRole>;
}

