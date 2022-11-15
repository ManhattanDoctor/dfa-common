import { MathUtil, ObjectUtil } from "@ts-core/common";
import { Type } from "class-transformer";
import { Min, Max, IsNumber, IsNumberString, IsOptional, IsString, isNumberString } from "class-validator";
import { LedgerVotingStepCoinTemplate } from "../template/LedgerVotingStepCoinTemplate";
import { LedgerVotingListCoin } from "./LedgerVotingListCoin";
import { LedgerVotingStep, LedgerVotingStepStatus } from "./LedgerVotingStep";

export class LedgerVotingStepCoin extends LedgerVotingStep {
    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static create(template: LedgerVotingStepCoinTemplate): LedgerVotingStepCoin {
        let item = new LedgerVotingStepCoin();
        item.list = new LedgerVotingListCoin();
        ObjectUtil.copyPartial(template, item, ['coinId', 'percent', 'type']);
        return item;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsString()
    public coinId: string;

    @Min(0)
    @Max(100)
    @IsNumber()
    public percent: number;

    @Type(() => LedgerVotingListCoin)
    public declare list: LedgerVotingListCoin;

    @IsOptional()
    @IsNumberString()
    public total: string;

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public check(): LedgerVotingStepStatus {

        let forPercent = MathUtil.toNumber(MathUtil.multiply('100', MathUtil.divide(this.for, this.total)));
        console.log(123, this.percent, forPercent);
        console.log(321, this.for, this.total);

        if (!this.isExpired()) {
            return LedgerVotingStepStatus.IN_PROGRESS;
        }

        if (MathUtil.equals(this.against, '0')) {
            return LedgerVotingStepStatus.APPROVED;
        }
        if (MathUtil.equals(this.list.votesTotal, '0')) {
            return LedgerVotingStepStatus.APPROVED;
        }
        if (MathUtil.equals(this.list.votesAgainst, '0')) {
            return LedgerVotingStepStatus.APPROVED;
        }
        return MathUtil.greaterThan(this.list.votesFor, this.list.votesAgainst) ? LedgerVotingStepStatus.APPROVED : LedgerVotingStepStatus.REJECTED;
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Properties
    //
    // --------------------------------------------------------------------------

    protected get for(): string {
        return this.list.votesFor;
    }

    protected get against(): string {
        return this.list.votesAgainst;
    }

}