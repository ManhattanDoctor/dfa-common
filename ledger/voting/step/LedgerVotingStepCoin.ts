import { ObjectUtil } from "@ts-core/common";
import { Type } from "class-transformer";
import { IsInt, IsOptional, IsBoolean, IsString } from "class-validator";
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
        ObjectUtil.copyPartial(template, item, ['coinId', 'isHoldAfterVote', 'isUnholdAfterFinish', 'type', 'votesVoteTypes', 'votesForMinPercent', 'votesTotalMinPercent', 'votesAgainstMaxPercent']);
        return item;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsOptional()
    @IsBoolean()
    public isHoldAfterVote?: boolean;

    @IsOptional()
    @IsBoolean()
    public isUnholdAfterFinish?: boolean;

    @IsString()
    public coinId: string;

    @IsOptional()
    @IsInt()
    public decimals?: number;

    @Type(() => LedgerVotingListCoin)
    public declare list: LedgerVotingListCoin;
}