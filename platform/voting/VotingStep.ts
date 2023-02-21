
import { Type } from 'class-transformer';
import { LedgerRoles } from '../../ledger/role';
import { LedgerVoteType } from '../../ledger/voting/LedgerVotingList';
import { ILedgerVotingRestriction } from '../../ledger/voting/LedgerVotingRestriction';
import { ILedgerVotingState } from '../../ledger/voting/LedgerVotingState';
import { LedgerVotingStepType } from '../../ledger/voting/LedgerVotingStepType';

export class VotingStep implements ILedgerVotingState, ILedgerVotingRestriction {
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

    votesVoteTypes?: Array<LedgerVoteType>;
    votesForMinPercent?: number;
    votesTotalMinPercent?: number;
    votesAgainstMaxPercent?: number;

    total?: string;
    
    @Type(() => Date)
    startedDate?: Date;

    @Type(() => Date)
    expiredDate?: Date;

    @Type(() => Date)
    finishedDate?: Date;

    roles?: Array<LedgerRoles>;
    coinId?: string;
    decimals?: number;
    isHoldAfterVote?: boolean;
    isUnholdAfterFinish?: boolean;
}