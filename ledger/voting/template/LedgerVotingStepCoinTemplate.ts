import { Min, Max, IsInt, IsOptional, IsString } from "class-validator";
import { LedgerVotingStepType } from "../LedgerVotingStepType";
import { LedgerVotingStepTemplate } from "./LedgerVotingStepTemplate";

export class LedgerVotingStepCoinTemplate extends LedgerVotingStepTemplate {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsString()
    public coinId: string;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor() {
        super();
        this.type = LedgerVotingStepType.COIN;
    }
}