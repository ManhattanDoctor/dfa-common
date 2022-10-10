import { DateUtil } from '@ts-core/common';
import { IsEnum, IsNumber, Min, Max } from 'class-validator';
import { LedgerVotingStepType } from '../LedgerVotingStepType';

export interface ILedgerVotingStepTemplate {
    type: LedgerVotingStepType;
    duration: number;

    [key: string]: any;
}

export abstract class LedgerVotingStepTemplate implements ILedgerVotingStepTemplate {
    @IsEnum(LedgerVotingStepType)
    public type: LedgerVotingStepType;

    @Min(0)
    @Max(DateUtil.MILLISECONDS_MONTH)
    @IsNumber()
    public duration: number;
}
