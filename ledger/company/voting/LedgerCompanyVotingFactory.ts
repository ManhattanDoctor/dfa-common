import { ClassType, DateUtil, UnreachableStatementError } from "@ts-core/common";
import { LedgerCompanyVotingProposalCoinEdit } from "./LedgerCompanyVotingProposalCoinEdit";
import { LedgerCompanyVotingProposalRoleEdit } from "./LedgerCompanyVotingProposalRoleEdit";
import { LedgerCompanyRegulation, LedgerCompanyRegulationType } from "../LedgerCompanyRegulation";
import { LedgerCompanyVotingProposal } from "./LedgerCompanyVotingProposal";
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

    public static getStepExpiredDate(regulation: LedgerCompanyRegulation, type: LedgerVotingStep | LedgerVotingStepType): Date {
        let item = LedgerCompanyVotingFactory.getStepTemplate(regulation, type);
        return DateUtil.getDate(Date.now() + item.duration);
    }

    public static getProposalClass(type: LedgerCompanyRegulationType): ClassType<LedgerCompanyVotingProposal> {
        switch (type) {
            case LedgerCompanyRegulationType.PROJECT_ADD:
                return LedgerCompanyVotingProposalProjectAdd;

            case LedgerCompanyRegulationType.COIN_EMIT:
            case LedgerCompanyRegulationType.COIN_BURN:
                return LedgerCompanyVotingProposalCoinEdit;

            case LedgerCompanyRegulationType.EXPERT_ADD:
            case LedgerCompanyRegulationType.PROTECTOR_ADD:
            case LedgerCompanyRegulationType.EXPERT_REMOVE:
            case LedgerCompanyRegulationType.PROTECTOR_REMOVE:
                return LedgerCompanyVotingProposalRoleEdit;

            default:
                throw new UnreachableStatementError(type);
        }
    }
}

export interface ILedgerCompanyVotingAddDto {
    date: Date;
    type: LedgerCompanyRegulationType;
    proposal: LedgerCompanyVotingProposal;
    transactionHash: string;
}