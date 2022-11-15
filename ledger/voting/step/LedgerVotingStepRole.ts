import { IsOneOfEnums, ObjectUtil } from "@ts-core/common";
import { ArrayNotEmpty, IsInt, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { LedgerRolesArray, LedgerRoles } from "../../role/LedgerRoles";
import { LedgerVotingStepRoleTemplate } from "../template/LedgerVotingStepRoleTemplate";
import { LedgerVotingListRole } from "./LedgerVotingListRole";
import { LedgerVotingStep, LedgerVotingStepStatus } from "./LedgerVotingStep";

export class LedgerVotingStepRole extends LedgerVotingStep {
    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static create(template: LedgerVotingStepRoleTemplate): LedgerVotingStepRole {
        let item = new LedgerVotingStepRole();
        item.list = new LedgerVotingListRole();
        item.list.storage = new Object();
        ObjectUtil.copyPartial(template, item, ['roles']);
        return item;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @ArrayNotEmpty()
    @IsOneOfEnums(LedgerRolesArray, { each: true })
    public roles: Array<LedgerRoles>;

    @Type(() => LedgerVotingListRole)
    public declare list: LedgerVotingListRole;

    @IsOptional()
    @IsInt()
    public total: number;

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public check(): LedgerVotingStepStatus {
        return LedgerVotingStepStatus.IN_PROGRESS;
    }
}

export enum LedgerVotingStepRoleAction {
    ADD = 'ADD',
    REMOVE = 'REMOVE'
}