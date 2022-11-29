import { IsOneOfEnums, ObjectUtil } from "@ts-core/common";
import { ArrayNotEmpty, IsNumberString, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { LedgerRolesArray, LedgerRoles } from "../../role/LedgerRoles";
import { LedgerVotingStepRoleTemplate } from "../template/LedgerVotingStepRoleTemplate";
import { LedgerVotingListRole } from "./LedgerVotingListRole";
import { LedgerVotingStep } from "./LedgerVotingStep";

export class LedgerVotingStepRole extends LedgerVotingStep {
    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static create(template: LedgerVotingStepRoleTemplate): LedgerVotingStepRole {
        let item = new LedgerVotingStepRole();
        item.list = LedgerVotingListRole.create();
        ObjectUtil.copyPartial(template, item, ['roles', 'type']);
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
    @IsNumberString()
    public total: string;
}
