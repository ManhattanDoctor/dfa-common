import { IsOptional, IsEnum, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { LedgerVotingStepType } from "../LedgerVotingStepType";

export abstract class LedgerVotingStep {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsEnum(LedgerVotingStepType)
    public type: LedgerVotingStepType;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    public expiredDate: Date;

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public isExpired(): boolean {
        return this.expiredDate.getTime() < Date.now();
    }

}
