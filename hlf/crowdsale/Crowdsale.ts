
import { IsEnum, IsDefined, ValidateNested, IsDate, Matches } from 'class-validator';
import { Type } from 'class-transformer';
import { IUIDable } from '@ts-core/common';
import { CrowdsaleUtil } from './CrowdsaleUtil';
import { CrowdsaleCondition } from './CrowdsaleCondition';
import { ICrowdsaleState } from './ICrowdsaleState';
import { CrowdsaleList } from './CrowdsaleList';
import { CoinUtil } from '@hlf-core/coin';
import * as _ from 'lodash';

export enum CrowdsaleType {
    ICO = 'ICO',
}

export enum CrowdsaleStatus {
    FAILED = 'FAILED',
    SUCCEED = 'SUCCEED',
    CREATED = 'CREATED',
    IN_PROGRESS = 'IN_PROGRESS',
}

export abstract class Crowdsale<P = object> implements IUIDable {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static PREFIX = 'crowdsale';
    public static UID_REG_EXP = new RegExp(`^${Crowdsale.PREFIX}/[0-9]{14}/[0-9a-fA-F]{64}$`);

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static createUid(created: Date, hash: string): string {
        return `${CrowdsaleUtil.PREFIX}/${_.padStart(created.getTime().toString(), 14, '0')}/${hash}`;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(Crowdsale.UID_REG_EXP)
    public uid: string;

    @IsEnum(CrowdsaleType)
    public type: CrowdsaleType;

    @IsEnum(CrowdsaleStatus)
    public status: CrowdsaleStatus;

    @Type(() => Date)
    @IsDate()
    public created: Date;

    @Type(() => Date)
    @IsDate()
    public started: Date;

    @Type(() => Date)
    @IsDate()
    public finished?: Date;

    @IsDefined()
    @Type(() => CrowdsaleList)
    @ValidateNested()
    public list: CrowdsaleList;

    @IsDefined()
    @Type(() => CrowdsaleCondition)
    @ValidateNested()
    public condition: CrowdsaleCondition;

    public abstract proposal: P;

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public stateGet(): ICrowdsaleState {
        return {
            percent: CoinUtil.toPercent(this.list.collected, this.condition.value),
            coinUid: this.condition.coinUid,
            required: this.condition.value,
            collected: this.list.collected,
            participants: this.list.participants,
        }
    }

    // --------------------------------------------------------------------------
    //
    //  Public Properties
    //
    // --------------------------------------------------------------------------

    public get isCompleted(): boolean {
        return this.status === CrowdsaleStatus.SUCCEED || this.status === CrowdsaleStatus.FAILED;
    }

    public get isInProgress(): boolean {
        return this.status === CrowdsaleStatus.IN_PROGRESS;
    }
}
