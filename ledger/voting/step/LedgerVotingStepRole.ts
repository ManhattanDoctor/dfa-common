import { IsOneOfEnums } from "@ts-core/common";
import { ArrayNotEmpty, IsEnum } from "class-validator";
import { LedgerRolesArray, LedgerRoles } from "../../role";
import { LedgerVotingStepType } from "../LedgerVotingStepType";
import { LedgerVotingStep } from "./LedgerVotingStep";

export class LedgerVotingStepRole extends LedgerVotingStep {
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

export enum LedgerVotingStepRoleAction {
    ADD = 'ADD',
    REMOVE = 'REMOVE'
}