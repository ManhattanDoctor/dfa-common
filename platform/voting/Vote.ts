import { Type } from 'class-transformer';
import { IsEnum, IsString } from 'class-validator';
import { LedgerVoteType } from "../../ledger/voting";

export class Vote {
    id: number;
    userId: number;
    stepId: number;

    @IsEnum(LedgerVoteType)
    type: LedgerVoteType;

    @IsEnum(LedgerVoteType)
    proposal: LedgerVoteType;

    @IsString()
    value: string;

    @Type(() => Date)
    createdDate: Date;
}