import { IsOneOfEnums } from "@ts-core/common";
import { ArrayNotEmpty, IsEnum } from "class-validator";
import { LedgerRolesArray, LedgerRoles, LedgerRole } from "../../role";
import { LedgerVotingStepType } from "../LedgerVotingStepType";
import { LedgerVotingStepTemplate } from "./LedgerVotingStepTemplate";

export class LedgerVotingStepRoleTemplate extends LedgerVotingStepTemplate {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @ArrayNotEmpty()
    @IsOneOfEnums(LedgerRolesArray, { each: true })
    public roles: Array<LedgerRoles>;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor() {
        super();
        this.type = LedgerVotingStepType.ROLE;
    }
}