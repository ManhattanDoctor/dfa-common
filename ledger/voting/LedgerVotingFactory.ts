import { ClassType, TransformUtil, UnreachableStatementError } from "@ts-core/common";
import { LedgerVotingStep } from "./step/LedgerVotingStep";
import { LedgerVotingStepType } from "./LedgerVotingStepType";
import { LedgerVotingStepCoin } from "./step/LedgerVotingStepCoin";
import { LedgerVotingStepRole } from "./step/LedgerVotingStepRole";
import { LedgerCompanyRegulationType } from "../company/LedgerCompanyRegulation";
import { LedgerVotingStepCoinTemplate } from "./template/LedgerVotingStepCoinTemplate";
import { LedgerVotingStepRoleTemplate } from "./template/LedgerVotingStepRoleTemplate";
import { LedgerVotingStepTemplate } from "./template/LedgerVotingStepTemplate";
import { LedgerError, LedgerErrorCode } from "../error/LedgerError";

export class LedgerVotingFactory {
    // --------------------------------------------------------------------------
    //
    //  Public Methods
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
    /*
        switch (type) {
            case LedgerCompanyRegulationType.PROJECT_ADD:
                return null;

            case LedgerCompanyRegulationType.COIN_EMIT:
                return LedgerVotingStepCoinTemplate;

            case LedgerCompanyRegulationType.EXPERT_ADD:
            case LedgerCompanyRegulationType.PROTECTOR_ADD:
            case LedgerCompanyRegulationType.EXPERT_REMOVE:
            case LedgerCompanyRegulationType.PROTECTOR_REMOVE:
                return LedgerVotingStepRoleTemplate;

            default:
                throw new UnreachableStatementError(type);
        }
    }
    */

    public static createStep(item: LedgerVotingStepTemplate): LedgerVotingStep {
        if (item instanceof LedgerVotingStepCoinTemplate) {
            return LedgerVotingStepCoin.create(item);
        }
        if (item instanceof LedgerVotingStepRoleTemplate) {
            return LedgerVotingStepRole.create(item);
        }
        throw new LedgerError(LedgerErrorCode.BAD_REQUEST, `No implementation for "${item.type}" voting step`);
    }
}