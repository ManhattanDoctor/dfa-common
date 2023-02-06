import { IsOptional, IsNumberString, IsDefined, IsEnum, IsDate, Min, Max, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { LedgerVotingStepType } from "../LedgerVotingStepType";
import { LedgerVotingList } from '../LedgerVotingList';
import { ILedgerVotingState } from '../LedgerVotingState';
import { LedgerVotingRestriction } from '../LedgerVotingRestriction';

export abstract class LedgerVotingStep extends LedgerVotingRestriction {
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
    public startedDate: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    public finishedDate: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    public expiredDate: Date;

    @IsDefined()
    public list: LedgerVotingList;

    @IsOptional()
    @IsNumberString()
    public total: string;

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public isExpired(date: Date): boolean {
        return this.expiredDate.getTime() < date.getTime();
    }

    public stateGet(): ILedgerVotingStepState {
        return {
            state: this.list.stateGet(this.total),
            total: this.total,
            startedDate: this.startedDate,
            expiredDate: this.expiredDate,
            finishedDate: this.finishedDate
        }
    }

}

export interface ILedgerVotingStepState {
    state: ILedgerVotingState;
    total: string;
    startedDate: Date;
    expiredDate: Date;
    finishedDate: Date;
}