
import { Type } from 'class-transformer';
import { LedgerRoles } from '../../ledger/role';
import { ILedgerVotingState } from '../../ledger/voting/LedgerVotingState';
import { LedgerVotingStepType } from '../../ledger/voting/LedgerVotingStepType';

export class VotingStep implements ILedgerVotingState {
    id: number;
    type: LedgerVotingStepType;
    index: number;
    votingId: number;

    votesFor: string;
    votesForPercent: number;
    votesTotal: string;
    votesTotalPercent: number;
    votesResult: string;
    votesResultPercent: number;
    votesAgainst: string;
    votesAgainstPercent: number;

    total: string;

    @Type(() => Date)
    startedDate: Date;

    @Type(() => Date)
    expiredDate: Date;

    @Type(() => Date)
    finishedDate: Date;

    roles?: Array<LedgerRoles>;
    coinId?: string;
    decimals?: number;
}