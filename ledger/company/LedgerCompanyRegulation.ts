import * as _ from 'lodash';
import { Type, Transform } from 'class-transformer';
import { IsEnum, IsDefined, ValidateNested } from 'class-validator';
import { ILedgerVotingTemplate } from '../voting/template/ILedgerVotingTemplate';
import { LedgerVotingStepTemplate } from '../voting/template/LedgerVotingStepTemplate';
import { LedgerVotingFactory } from '../voting/LedgerVotingFactory';
import { LedgerCompanyVotingProposalType } from '../company/voting/LedgerCompanyVotingProposal';

export enum LedgerCompanyRegulationType {
    COIN_EMIT = 'COMPANY_COIN_EMIT',
    COIN_BURN = 'COMPANY_COIN_BURN',

    PROJECT_ADD = 'COMPANY_PROJECT_ADD',

    EXPERT_ADD = 'COMPANY_EXPERT_ADD',
    EXPERT_REMOVE = 'COMPANY_EXPERT_REMOVE',

    PROTECTOR_ADD = 'COMPANY_PROTECTOR_ADD',
    PROTECTOR_REMOVE = 'COMPANY_PROTECTOR_REMOVE'
}

export interface ILedgerCompanyRegulation extends ILedgerVotingTemplate<LedgerCompanyRegulationType> {
    proposal: LedgerCompanyVotingProposalType;
}

export class LedgerCompanyRegulation implements ILedgerCompanyRegulation {
    @IsEnum(LedgerCompanyRegulationType)
    public type: LedgerCompanyRegulationType;

    @IsEnum(LedgerCompanyVotingProposalType)
    public proposal: LedgerCompanyVotingProposalType;

    @Type(() => LedgerVotingStepTemplate)
    @Transform(item => item.value.map(LedgerVotingFactory.transformStepTemplate), { toClassOnly: true })
    @IsDefined()
    @ValidateNested()
    public steps: Array<LedgerVotingStepTemplate>;
}
