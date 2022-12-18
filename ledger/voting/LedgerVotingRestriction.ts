import { IsOptional, IsInt, Min, Max } from 'class-validator';

export interface ILedgerVotingRestriction {
    votesForMinPercent?: number;
    votesTotalMinPercent?: number;
    votesAgainstMaxPercent?: number;
}

export class LedgerVotingRestriction implements ILedgerVotingRestriction {
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
