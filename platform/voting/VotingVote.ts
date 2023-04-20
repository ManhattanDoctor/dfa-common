import { Type } from 'class-transformer';
import { LedgerVoteType } from "../../ledger/voting";
import { User } from '../user';

export class VotingVote {
    id: number;
    type: LedgerVoteType;
    value: string;
    userId: number;
    stepId: number;

    @Type(() => Date)
    date: Date;

    user?: User;
    data?: Array<number>;
}