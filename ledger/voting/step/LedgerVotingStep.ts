import { IsEnum, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { LedgerVotingList } from '../LedgerVotingList';
import { LedgerVotingStepType } from "../LedgerVotingStepType";

export abstract class LedgerVotingStep {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsEnum(LedgerVotingStepType)
    public type: LedgerVotingStepType;

    @IsDate()
    public expiredDate: Date;

    @Type(() => LedgerVotingList)
    public list: LedgerVotingList;

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public isExpired(): boolean {
        return this.expiredDate.getTime() < Date.now();
    }

}
