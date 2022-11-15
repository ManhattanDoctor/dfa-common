import { IsOptional, IsDefined, IsEnum, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { LedgerVotingStepType } from "../LedgerVotingStepType";
import { LedgerVotingList } from '../LedgerVotingList';

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

    @IsDefined()
    public list: LedgerVotingList;

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public abstract check(): LedgerVotingStepStatus;

    public isExpired(): boolean {
        return this.expiredDate.getTime() < Date.now();
    }

}

export enum LedgerVotingStepStatus {
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
    IN_PROGRESS = 'IN_PROGRESS',
}
