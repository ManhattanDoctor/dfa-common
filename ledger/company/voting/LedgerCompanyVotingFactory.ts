import { ClassType, DateUtil, TransformUtil, UnreachableStatementError } from "@ts-core/common";
import { LedgerCompanyVotingProposalCoinEdit } from "./LedgerCompanyVotingProposalCoinEdit";
import { LedgerCompanyVotingProposalRoleEdit } from "./LedgerCompanyVotingProposalRoleEdit";
import { LedgerCompanyRegulation, LedgerCompanyRegulationType } from "../LedgerCompanyRegulation";
import { LedgerCompanyVotingProposal, LedgerCompanyVotingProposalType } from "./LedgerCompanyVotingProposal";
import * as _ from 'lodash';
import { LedgerBadRequestError } from "../../error/LedgerError";
import { LedgerVotingStep } from "../../voting/step/LedgerVotingStep";
import { LedgerVotingStepType } from "../../voting/LedgerVotingStepType";
import { LedgerVotingStepTemplate } from "../../voting/template/LedgerVotingStepTemplate";
import { LedgerCompanyVotingProposalProjectAdd } from "./LedgerCompanyVotingProposalProjectAdd";

export class LedgerCompanyVotingFactory {
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public static getStepTemplate(regulation: LedgerCompanyRegulation, type: LedgerVotingStepType | LedgerVotingStep): LedgerVotingStepTemplate {
        if (type instanceof LedgerVotingStep) {
            type = type.type;
        }
        let item = _.find(regulation.steps, { type });
        if (_.isNil(item)) {
            throw new LedgerBadRequestError(`Unable find "${type}" in regulation steps`);
        }
        return item;
    }

    public static getStepExpiredDate(date: Date, regulation: LedgerCompanyRegulation, type: LedgerVotingStep | LedgerVotingStepType): Date {
        let item = LedgerCompanyVotingFactory.getStepTemplate(regulation, type);
        return DateUtil.getDate(date.getTime() + item.duration);
    }

    public static transformProposal(item: LedgerCompanyVotingProposal): LedgerCompanyVotingProposal {
        let classType: ClassType<LedgerCompanyVotingProposal> = null;
        switch (item.type) {
            case LedgerCompanyVotingProposalType.COIN_EDIT:
                classType = LedgerCompanyVotingProposalCoinEdit;
                break;
            case LedgerCompanyVotingProposalType.ROLE_EDIT:
                classType = LedgerCompanyVotingProposalRoleEdit;
                break;
            case LedgerCompanyVotingProposalType.PROJECT_ADD:
                classType = LedgerCompanyVotingProposalProjectAdd;
                break;
            default:
                throw new UnreachableStatementError(item.type);
        }
        return TransformUtil.toClass(classType, item);
    }
}