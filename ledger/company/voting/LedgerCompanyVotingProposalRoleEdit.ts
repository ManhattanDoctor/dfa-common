import { Matches, ArrayNotEmpty, IsEnum } from 'class-validator';
import { LedgerCompanyRole } from '../../role/LedgerCompanyRole';
import { LedgerUser } from '../../user/LedgerUser';
import { LedgerCompanyVotingProposal } from "./LedgerCompanyVotingProposal";

export enum LedgerCompanyVotingProposalRoleAction {
    ADD = 'ADD',
    REMOVE = 'REMOVE'
}

export class LedgerCompanyVotingProposalRoleEdit extends LedgerCompanyVotingProposal {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(LedgerUser.UID_REG_EXP)
    public to: string;

    @IsEnum(LedgerCompanyVotingProposalRoleAction)
    public action: LedgerCompanyVotingProposalRoleAction;

    @ArrayNotEmpty()
    @IsEnum(LedgerCompanyRole, { each: true })
    public roles: Array<LedgerCompanyRole>;
}
