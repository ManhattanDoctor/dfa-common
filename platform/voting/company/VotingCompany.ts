import { Type, Transform } from 'class-transformer';
import { LedgerCompanyRegulationType } from '../../../ledger/company/LedgerCompanyRegulation';
import { LedgerVotingCompanyFactory } from '../../../ledger/voting/company/LedgerVotingCompanyFactory';
import { LedgerVotingCompanyProposal } from '../../../ledger/voting/company/LedgerVotingCompanyProposal';
import { LedgerVotingStatus } from '../../../ledger/voting/LedgerVoting';
import { ILedgreable } from '../../ILedgerable';
import { VotingStep } from '../VotingStep';
import * as _ from 'lodash';

export class VotingCompany implements ILedgreable {
    id: number;
    type: LedgerCompanyRegulationType;
    status: LedgerVotingStatus;

    @Type(() => LedgerVotingCompanyProposal)
    @Transform(item => LedgerVotingCompanyFactory.transformProposal(item.value), { toClassOnly: true })
    proposal: LedgerVotingCompanyProposal;

    userId: number;
    companyId: number;
    ledgerUid: string;
    stepIndex: number;

    @Type(() => VotingStep)
    // @Transform(item => item.value.map(LedgerVotingFactory.transformStep), { toClassOnly: true })
    steps: Array<VotingStep>;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;

    @Type(() => Date)
    finishedDate: Date;

}


