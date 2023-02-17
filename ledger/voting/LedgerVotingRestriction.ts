import { IsOptional, IsEnum, IsArray, IsInt, Min, Max } from 'class-validator';
import { LedgerVoteType } from './LedgerVotingList';

export interface ILedgerVotingRestriction {
    votesVoteTypes?: Array<LedgerVoteType>;
    votesForMinPercent?: number;
    votesTotalMinPercent?: number;
    votesAgainstMaxPercent?: number;
}

export class LedgerVotingRestriction implements ILedgerVotingRestriction {
    @IsOptional()
    @IsEnum(LedgerVoteType, { each: true })
    @IsArray()
    public votesVoteTypes?: Array<LedgerVoteType>;

    @IsOptional()
    @Min(0)
    @Max(100)
    @IsInt()
    public votesForMinPercent?: number;

    @IsOptional()
    @Min(0)
    @Max(100)
    @IsInt()
    public votesTotalMinPercent?: number;

    @IsOptional()
    @Min(0)
    @Max(100)
    @IsInt()
    public votesAgainstMaxPercent?: number;
}
