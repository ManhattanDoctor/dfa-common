import { Type } from 'class-transformer';
import { IsOptional, IsEnum, IsString } from 'class-validator';
import { LedgerVoteType } from "../../ledger/voting";
import { User } from '../user';

export class VotingVote {
    id: number;
    userId: number;
    stepId: number;

    user?: User;

    @IsEnum(LedgerVoteType)
    type: LedgerVoteType;

    @Type(() => Date)
    date: Date;

    @IsString()
    value: string;

    @IsOptional()
    @IsString({ each: true })
    data?: Array<string>;
}