import { Type, Transform } from 'class-transformer';
import { LedgerCompanyRegulationType } from '../../ledger/company/LedgerCompanyRegulation';
import { LedgerCompanyVotingFactory } from '../../ledger/company/voting/LedgerCompanyVotingFactory';
import { LedgerCompanyVotingProposal } from '../../ledger/company/voting/LedgerCompanyVotingProposal';
import { LedgerVotingFactory } from '../../ledger/voting/LedgerVotingFactory';
import { LedgerVotingStatus } from '../../ledger/voting/LedgerVoting';
import { LedgerVotingStep } from '../../ledger/voting/step/LedgerVotingStep';
import { ILedgreable } from '../ILedgerable';
import { VotingStep } from '../voting/VotingStep';
import * as _ from 'lodash';

export class CompanyVoting implements ILedgreable {
    id: number;
    type: LedgerCompanyRegulationType;
    status: LedgerVotingStatus;

    @Type(() => LedgerCompanyVotingProposal)
    @Transform(item => LedgerCompanyVotingFactory.transformProposal(item.value), { toClassOnly: true })
    proposal: LedgerCompanyVotingProposal;

    userId: number;
    companyId: number;
    ledgerUid: string;
    stepIndex: number;

    @Type(() => LedgerVotingStep)
    @Transform(item => item.value.map(LedgerVotingFactory.transformStep), { toClassOnly: true })
    steps: Array<VotingStep>;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;

    @Type(() => Date)
    completedDate: Date;

}


