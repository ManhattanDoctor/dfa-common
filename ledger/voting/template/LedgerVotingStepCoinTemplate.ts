import { IsString, IsBoolean } from "class-validator";
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

    @IsBoolean()
    public isHold: boolean;

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