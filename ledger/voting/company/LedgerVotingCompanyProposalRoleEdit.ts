import { Matches, ArrayNotEmpty, IsEnum } from 'class-validator';
import { LedgerCompanyRole } from '../../role/LedgerCompanyRole';
import { LedgerUser } from '../../user/LedgerUser';
import { LedgerVotingCompanyProposal, LedgerVotingCompanyProposalType } from "./LedgerVotingCompanyProposal";

export enum LedgerVotingCompanyProposalRoleAction {
    ADD = 'ADD',
    REMOVE = 'REMOVE'
}

export class LedgerVotingCompanyProposalRoleEdit extends LedgerVotingCompanyProposal {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(LedgerUser.UID_REG_EXP)
    public to: string;

    @IsEnum(LedgerVotingCompanyProposalRoleAction)
    public action: LedgerVotingCompanyProposalRoleAction;

    @ArrayNotEmpty()
    @IsEnum(LedgerCompanyRole, { each: true })
    public roles: Array<LedgerCompanyRole>;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor() {
        super();
        this.type = LedgerVotingCompanyProposalType.ROLE_EDIT;
    }
}
