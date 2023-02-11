import { ClassType, TransformUtil, UnreachableStatementError } from "@ts-core/common";
import { LedgerVotingStep } from "./step/LedgerVotingStep";
import { LedgerVotingStepType } from "./LedgerVotingStepType";
import { LedgerVotingStepCoin } from "./step/LedgerVotingStepCoin";
import { LedgerVotingStepRole } from "./step/LedgerVotingStepRole";
import { LedgerVotingStepCoinTemplate } from "./template/LedgerVotingStepCoinTemplate";
import { LedgerVotingStepRoleTemplate } from "./template/LedgerVotingStepRoleTemplate";
import { LedgerVotingStepTemplate } from "./template/LedgerVotingStepTemplate";
import { LedgerBadRequestError } from "../error/LedgerError";

export class LedgerVotingFactory {

    // --------------------------------------------------------------------------
    //
    //  Step Methods
    //
    // --------------------------------------------------------------------------

    public static transformStep(item: LedgerVotingStep): LedgerVotingStep {
        let classType: ClassType<LedgerVotingStep> = null;
        switch (item.type) {
            case LedgerVotingStepType.COIN:
                classType = LedgerVotingStepCoin;
                break;
            case LedgerVotingStepType.ROLE:
                classType = LedgerVotingStepRole;
                break;
            default:
                throw new UnreachableStatementError(item.type);
        }
        return TransformUtil.toClass(classType, item);
    }

    public static transformStepTemplate(item: LedgerVotingStepTemplate): LedgerVotingStepTemplate {
        let classType: ClassType<LedgerVotingStepTemplate> = null;
        switch (item.type) {
            case LedgerVotingStepType.COIN:
                classType = LedgerVotingStepCoinTemplate;
                break;
            case LedgerVotingStepType.ROLE:
                classType = LedgerVotingStepRoleTemplate;
                break;
            default:
                throw new UnreachableStatementError(item.type);
        }
        return TransformUtil.toClass(classType, item);
    }
    
    public static createStep(item: LedgerVotingStepTemplate): LedgerVotingStep {
        if (item instanceof LedgerVotingStepCoinTemplate) {
            return LedgerVotingStepCoin.create(item);
        }
        if (item instanceof LedgerVotingStepRoleTemplate) {
            return LedgerVotingStepRole.create(item);
        }
        throw new LedgerBadRequestError(`No implementation for "${item.type}" voting step`);
    }
}
