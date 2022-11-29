import { LedgerRoles } from '@project/common/ledger/role';
import { Type } from 'class-transformer';
import { LedgerVotingStepType } from '../../ledger/voting/LedgerVotingStepType';

export class VotingStep {
    id: number;
    type: LedgerVotingStepType;
    votingId: number;

    @Type(() => Date)
    expiredDate?: Date;

    roles?: Array<LedgerRoles>;
    total?: string;
    coinId?: string;
    percent?: number;
}