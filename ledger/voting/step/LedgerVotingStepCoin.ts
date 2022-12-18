import { ObjectUtil } from "@ts-core/common";
import { Type } from "class-transformer";
import { Min, IsOptional, Max, IsInt, IsString } from "class-validator";
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
        item.list = LedgerVotingListCoin.create();
        ObjectUtil.copyPartial(template, item, ['coinId', 'type', 'votesForMinPercent', 'votesTotalMinPercent', 'votesAgainstMaxPercent']);
        return item;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsString()
    public coinId: string;

    @IsInt()
    public decimals: number;

    @Type(() => LedgerVotingListCoin)
    public declare list: LedgerVotingListCoin;
}