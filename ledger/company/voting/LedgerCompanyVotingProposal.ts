export enum LedgerCompanyVotingProposalType {
    COIN_EDIT = 'COMPANY_COIN_EDIT',
    ROLE_EDIT = 'COMPANY_ROLE_EDIT',
    PROJECT_ADD = 'COMPANY_PROJECT_ADD',
}

export interface ILedgerCompanyVotingProposal {
    type: LedgerCompanyVotingProposalType;
    [key: string]: any;
}

export class LedgerCompanyVotingProposal implements ILedgerCompanyVotingProposal {
    type: LedgerCompanyVotingProposalType;
}

