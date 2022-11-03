import { ClassType, DateUtil, TransformUtil, UnreachableStatementError } from "@ts-core/common";
import { LedgerCompanyVotingProposalCoinEmit } from "./LedgerCompanyVotingProposalCoinEmit";
import { LedgerCompanyVotingProposalRoleChange } from "./LedgerCompanyVotingProposalRoleChange";
import { LedgerCompany } from "../LedgerCompany";
import { LedgerCompanyRegulation, LedgerCompanyRegulationType } from "../LedgerCompanyRegulation";
import { LedgerCompanyVoting } from "./LedgerCompanyVoting";
import { LedgerCompanyVotingProposal } from "./LedgerCompanyVotingProposal";
import * as _ from 'lodash';
import { LedgerBadRequestError, LedgerError, LedgerErrorCode } from "@project/common/ledger/error";
import { LedgerVotingStatus } from "../../voting/LedgerVoting";
import { LedgerVotingFactory } from "../../voting/LedgerVotingFactory";
import { LedgerVotingStep } from "@project/common/ledger/voting/step";
import { LedgerVotingStepTemplate } from "@project/common/ledger/voting/template";
import { LedgerVotingStepType } from "@project/common/ledger/voting";

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
                return null;

            case LedgerCompanyRegulationType.COIN_EMIT:
                return LedgerCompanyVotingProposalCoinEmit;

            case LedgerCompanyRegulationType.EXPERT_ADD:
            case LedgerCompanyRegulationType.PROTECTOR_ADD:
            case LedgerCompanyRegulationType.EXPERT_REMOVE:
            case LedgerCompanyRegulationType.PROTECTOR_REMOVE:
                return LedgerCompanyVotingProposalRoleChange;

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