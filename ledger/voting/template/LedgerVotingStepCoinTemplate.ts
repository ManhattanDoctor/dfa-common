import { Min, Max, IsNumber, IsString } from "class-validator";
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

    @Min(0)
    @Max(100)
    @IsNumber()
    public percent: number;

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