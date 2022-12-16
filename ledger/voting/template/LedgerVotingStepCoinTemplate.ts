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

    @IsOptional()
    @Min(0)
    @Max(100)
    @IsInt()
    public percentForMin?: number;
    
    @IsOptional()
    @Min(0)
    @Max(100)
    @IsInt()
    public percentTotalMin?: number;

    @IsOptional()
    @Min(0)
    @Max(100)
    @IsInt()
    public percentAgainstMax?: number;

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