
import * as _ from 'lodash';
import { IsEnum, IsOptional, IsInt, Min, IsDate, IsDefined, ValidateNested, Matches } from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { RegExpUtil } from '../../util/RegExpUtil';
import { ILedgerObject } from '../ILedgerObject';
import { LedgerVotingStep } from './step/LedgerVotingStep';
import { LedgerVotingFactory } from './LedgerVotingFactory';

export enum LedgerVotingStatus {
    IN_PROGRESS = 'IN_PROGRESS',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}

export abstract class LedgerVoting<U = string, V = object> implements ILedgerObject {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static PREFIX = 'voting';
    public static UID_REG_EXP = new RegExp(`^${LedgerVoting.PREFIX}/${RegExpUtil.DATE_TIME}/${RegExpUtil.TRANSACTION_HASH}$`);

    private static MAX_CREATED_DATE = new Date(2500, 0);

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static createUid(createdDate: Date, transactionHash: string): string {
        let time = LedgerVoting.MAX_CREATED_DATE.getTime() - createdDate.getTime();
        return `${LedgerVoting.PREFIX}/${_.padStart(time.toString(), 14, '0')}/${transactionHash}`;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(LedgerVoting.UID_REG_EXP)
    public uid: string;

    @IsEnum(LedgerVotingStatus)
    public status: LedgerVotingStatus;

    @Type(() => Date)
    @IsDate()
    public startedDate: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    public finishedDate: Date;

    @Min(0)
    @IsInt()
    public stepIndex: number;

    @Type(() => LedgerVotingStep)
    @Transform(item => item.value.map(LedgerVotingFactory.transformStep), { toClassOnly: true })
    @IsDefined()
    @ValidateNested()
    public steps: Array<LedgerVotingStep>;

    public abstract type: U;
    public abstract proposal: V;

    // --------------------------------------------------------------------------
    //
    //  Public Properties
    //
    // --------------------------------------------------------------------------

    public get step(): LedgerVotingStep {
        return this.steps[this.stepIndex];
    }

    public get isLastStep(): boolean {
        return this.stepIndex === this.steps.length - 1;
    }

    public get isCompleted(): boolean {
        return this.status === LedgerVotingStatus.APPROVED || this.status === LedgerVotingStatus.REJECTED;
    }

    public get isInProgress(): boolean {
        return this.status === LedgerVotingStatus.IN_PROGRESS;
    }
}
