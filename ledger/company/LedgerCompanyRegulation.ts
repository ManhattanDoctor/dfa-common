import * as _ from 'lodash';
import { Type, Transform } from 'class-transformer';
import { IsEnum, IsString, IsDefined, ValidateNested } from 'class-validator';
import { ILedgerVotingTemplate } from '../voting/template/ILedgerVotingTemplate';
import { LedgerVotingStepTemplate } from '../voting/template/LedgerVotingStepTemplate';
import { LedgerVotingFactory } from '../voting/LedgerVotingFactory';
import { LedgerVotingCompanyProposalType } from '../voting/company/LedgerVotingCompanyProposal';

export type LedgerCompanyRegulationType = LedgerCompanyRegulationTypePreset | string;

export enum LedgerCompanyRegulationTypePreset {
    COIN_EMIT = 'COMPANY_COIN_EMIT',
    COIN_BURN = 'COMPANY_COIN_BURN',

    SELECT = 'COMPANY_SELECT',
    PROJECT_ADD = 'COMPANY_PROJECT_ADD',

    EXPERT_ADD = 'COMPANY_EXPERT_ADD',
    EXPERT_REMOVE = 'COMPANY_EXPERT_REMOVE',

    PROTECTOR_ADD = 'COMPANY_PROTECTOR_ADD',
    PROTECTOR_REMOVE = 'COMPANY_PROTECTOR_REMOVE'
}

export interface ILedgerCompanyRegulation extends ILedgerVotingTemplate<LedgerCompanyRegulationType> {
    proposal: LedgerVotingCompanyProposalType;
}

export class LedgerCompanyRegulation implements ILedgerCompanyRegulation {
    @IsString()
    public type: LedgerCompanyRegulationType;

    @IsEnum(LedgerVotingCompanyProposalType)
    public proposal: LedgerVotingCompanyProposalType;

    @Type(() => LedgerVotingStepTemplate)
    @Transform(item => item.value.map(LedgerVotingFactory.transformStepTemplate), { toClassOnly: true })
    @IsDefined()
    @ValidateNested()
    public steps: Array<LedgerVotingStepTemplate>;
}
