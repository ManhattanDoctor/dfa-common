import { ClassType, DateUtil, TransformUtil, UnreachableStatementError } from "@ts-core/common";
import { LedgerCompanyVotingProposalCoinEmit } from "./LedgerCompanyVotingProposalCoinEmit";
import { LedgerCompanyVotingProposalRoleChange } from "./LedgerCompanyVotingProposalRoleChange";
import { LedgerCompany } from "../LedgerCompany";
import { LedgerCompanyRegulation, LedgerCompanyRegulationType } from "../LedgerCompanyRegulation";
import { LedgerCompanyVoting } from "./LedgerCompanyVoting";
import { ILedgerCompanyVotingProposal, LedgerCompanyVotingProposal } from "./LedgerCompanyVotingProposal";
import * as _ from 'lodash';
import { LedgerError, LedgerErrorCode } from "@project/common/ledger/error";
import { LedgerVotingStatus } from "../../voting/LedgerVoting";
import { LedgerVotingFactory } from "../../voting/LedgerVotingFactory";
import { LedgerVotingStep } from "@project/common/ledger/voting/step";
import { LedgerVotingStepType } from "@project/common/ledger/voting";

export class LedgerCompanyVotingFactory {
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public static create(date: Date, transactionHash: string, company: LedgerCompany, params: ILedgerCompanyVotingDto): LedgerCompanyVoting {
        let item = LedgerCompanyVoting.create(date, transactionHash);
        item.type = params.type;
        item.status = LedgerVotingStatus.IN_PROGRESS;
        item.proposal = TransformUtil.toClass(LedgerCompanyVotingFactory.getProposalClass(params.type), params.proposal);
        item.companyUid = company.uid;

        let regulation = _.find(company.regulations, { type: params.type });
        if (_.isNil(regulation)) {
            throw new LedgerError(LedgerErrorCode.BAD_REQUEST, `Unable find "${params.type}" in company regulations`);
        }

        item.steps = regulation.steps.map(LedgerVotingFactory.createStep);
        item.stepIndex = 0;
        item.step.expiredDate = LedgerCompanyVotingFactory.getStepExpiredDate(regulation, item.step);
        return item;
    }

    public static getStepExpiredDate(regulation: LedgerCompanyRegulation, step: LedgerVotingStep): Date {
        let template = _.find(regulation.steps, { type: step.type });
        if (_.isNil(template)) {
            throw new LedgerError(LedgerErrorCode.BAD_REQUEST, `Unable find "${step.type}" in regulation steps`);
        }
        return DateUtil.getDate(Date.now() + template.duration);
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

export interface ILedgerCompanyVotingDto {
    type: LedgerCompanyRegulationType;
    proposal: ILedgerCompanyVotingProposal;
}