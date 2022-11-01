import { ObjectUtil } from "@ts-core/common";
import { Type } from "class-transformer";
import { Min, Max, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";
import { LedgerVotingStepCoinTemplate } from "../template/LedgerVotingStepCoinTemplate";
import { LedgerVotingListCoin } from "./LedgerVotingListCoin";
import { LedgerVotingStep } from "./LedgerVotingStep";

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
    public list: LedgerVotingListCoin;

    @IsOptional()
    @IsNumberString()
    public total: string;

    /*
    public checkStatus(): LedgerVotingStatus {
        if (!this.isExpired()) {
            return LedgerVotingStatus.IN_PROGRESS;
        }
        if (MathUtil.equals(this.votesTotal, '0')) {
            return LedgerVotingStatus.APPROVED;
        }
        if (MathUtil.equals(this.votesAgainst, '0')) {
            return LedgerVotingStatus.APPROVED;
        }
        return MathUtil.greaterThan(this.votesFor, this.votesAgainst) ? LedgerVotingStatus.APPROVED : LedgerVotingStatus.REJECTED;
    }
    */
}