import { DateUtil } from '@ts-core/common';
import { IsEnum, IsNumber, Min, Max } from 'class-validator';
import { ILedgerVotingRestriction, LedgerVotingRestriction } from '../LedgerVotingRestriction';
import { LedgerVotingStepType } from '../LedgerVotingStepType';

export interface ILedgerVotingStepTemplate extends ILedgerVotingRestriction {
    type: LedgerVotingStepType;
    duration: number;

    [key: string]: any;
}

export abstract class LedgerVotingStepTemplate extends LedgerVotingRestriction implements ILedgerVotingStepTemplate {
    @IsEnum(LedgerVotingStepType)
    public type: LedgerVotingStepType;

    @Min(0)
    @Max(DateUtil.MILLISECONDS_MONTH)
    @IsNumber()
    public duration: number;
}
