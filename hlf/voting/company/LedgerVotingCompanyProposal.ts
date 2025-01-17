export enum LedgerVotingCompanyProposalType {
    SELECT = 'COMPANY_SELECT',
    COIN_EDIT = 'COMPANY_COIN_EDIT',
    ROLE_EDIT = 'COMPANY_ROLE_EDIT',
    PROJECT_ADD = 'COMPANY_PROJECT_ADD',
}

export interface ILedgerVotingCompanyProposal {
    type: LedgerVotingCompanyProposalType;
    [key: string]: any;
}

export class LedgerVotingCompanyProposal implements ILedgerVotingCompanyProposal {
    type: LedgerVotingCompanyProposalType;
}

