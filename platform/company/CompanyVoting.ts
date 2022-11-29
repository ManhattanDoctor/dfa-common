import { Type } from 'class-transformer';
import { LedgerCompanyRegulationType } from '../../ledger/company/LedgerCompanyRegulation';
import { LedgerCompanyVotingProposal } from '../../ledger/company/voting/LedgerCompanyVotingProposal';
import { LedgerVotingStatus } from '../../ledger/voting/LedgerVoting';
import { VotingStep } from '../voting/VotingStep';

export class CompanyVoting {
    id: number;
    type: LedgerCompanyRegulationType;
    status: LedgerVotingStatus;
    proposal: LedgerCompanyVotingProposal;
    userId: number;
    companyId: number;
    ledgerUid: string;

    steps: Array<VotingStep>;
    stepIndex: number;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;

    @Type(() => Date)
    completedDate: Date;
}

