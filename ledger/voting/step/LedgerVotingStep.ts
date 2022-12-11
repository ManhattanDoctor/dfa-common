import { IsOptional, IsNumberString, IsDefined, IsEnum, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { LedgerVotingStepType } from "../LedgerVotingStepType";
import { LedgerVotingList } from '../LedgerVotingList';
import { ILedgerVotingState } from '../LedgerVotingState';

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

    public isExpired(): boolean {
        return this.expiredDate.getTime() < Date.now();
    }

    public stateGet(): ILedgerVotingStepState {
        return {
            state: this.list.stateGet(),
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