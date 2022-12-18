import { IsOptional, IsInt, Min, Max } from 'class-validator';

export interface ILedgerVotingRestriction {
    percentForMin?: number;
    percentTotalMin?: number;
    percentAgainstMax?: number;
}

export class LedgerVotingRestriction implements ILedgerVotingRestriction {
    @IsOptional()
    @Min(0)
    @Max(100)
    @IsInt()
    public percentForMin?: number;

    @IsOptional()
    @Min(0)
    @Max(100)
    @IsInt()
    public percentTotalMin?: number;

    @IsOptional()
    @Min(0)
    @Max(100)
    @IsInt()
    public percentAgainstMax?: number;
}
