
import * as _ from 'lodash';
import { IsEnum, IsOptional, IsNumber, Min, IsDate, IsDefined, ValidateNested, Matches } from 'class-validator';
import { Type } from 'class-transformer';
import { RegExpUtil } from '../../util';
import { ILedgerObject } from '../ILedgerObject';
import { LedgerVotingStep, LedgerVotingStepCoin, LedgerVotingStepRole } from './step';
import { LedgerVotingStepType } from './LedgerVotingStepType';

export enum LedgerVotingStatus {
    IN_PROGRESS = 'IN_PROGRESS',
    RESOLVED = 'RESOLVED',
    REJECTED = 'REJECTED',
}

export abstract class LedgerVoting<U, V> implements ILedgerObject {
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
    public createdDate: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    public completedDate: Date;

    @Min(0)
    @IsNumber()
    public stepIndex: number;

    @Type(() => LedgerVotingStep, {
        discriminator: {
            property: 'type',
            subTypes: [
                { name: LedgerVotingStepType.ROLE, value: LedgerVotingStepRole },
                { name: LedgerVotingStepType.COIN, value: LedgerVotingStepCoin },
            ]
        },
        keepDiscriminatorProperty: true,
    })
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

    public get isCompleted(): boolean {
        return !this.isInProgress;
    }

    public get isInProgress(): boolean {
        return this.status === LedgerVotingStatus.IN_PROGRESS;
    }

}


