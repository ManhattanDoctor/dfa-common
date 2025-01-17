import { IsOneOfEnums, ObjectUtil } from "@ts-core/common";
import { ArrayNotEmpty } from "class-validator";
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
        ObjectUtil.copyPartial(template, item, ['roles', 'type', 'votesVoteTypes', 'votesForMinPercent', 'votesTotalMinPercent', 'votesAgainstMaxPercent']);
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
}
