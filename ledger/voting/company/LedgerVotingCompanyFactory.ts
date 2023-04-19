import { ClassType, DateUtil, TransformUtil, UnreachableStatementError } from "@ts-core/common";
import { LedgerVotingCompanyProposalCoinEdit } from "./LedgerVotingCompanyProposalCoinEdit";
import { LedgerVotingCompanyProposalRoleEdit } from "./LedgerVotingCompanyProposalRoleEdit";
import { LedgerCompanyRegulation } from "../../company/LedgerCompanyRegulation";
import { LedgerVotingCompanyProposal, LedgerVotingCompanyProposalType } from "./LedgerVotingCompanyProposal";
import * as _ from 'lodash';
import { LedgerBadRequestError } from "../../error/LedgerError";
import { LedgerVotingStep } from "../../voting/step/LedgerVotingStep";
import { LedgerVotingStepType } from "../../voting/LedgerVotingStepType";
import { LedgerVotingStepTemplate } from "../../voting/template/LedgerVotingStepTemplate";
import { LedgerVotingCompanyProposalProjectAdd } from "./LedgerVotingCompanyProposalProjectAdd";
import { LedgerVotingCompanyProposalSelect } from "./LedgerVotingCompanyProposalSelect";

export class LedgerVotingCompanyFactory {
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
        let item = LedgerVotingCompanyFactory.getStepTemplate(regulation, type);
        return DateUtil.getDate(date.getTime() + item.duration);
    }

    public static transformProposal(item: LedgerVotingCompanyProposal): LedgerVotingCompanyProposal {
        let classType: ClassType<LedgerVotingCompanyProposal> = null;
        switch (item.type) {
            case LedgerVotingCompanyProposalType.SELECT:
                classType = LedgerVotingCompanyProposalSelect;
                break;
            case LedgerVotingCompanyProposalType.COIN_EDIT:
                classType = LedgerVotingCompanyProposalCoinEdit;
                break;
            case LedgerVotingCompanyProposalType.ROLE_EDIT:
                classType = LedgerVotingCompanyProposalRoleEdit;
                break;
            case LedgerVotingCompanyProposalType.PROJECT_ADD:
                classType = LedgerVotingCompanyProposalProjectAdd;
                break;
            default:
                throw new UnreachableStatementError(item.type);
        }
        return TransformUtil.toClass(classType, item);
    }
}