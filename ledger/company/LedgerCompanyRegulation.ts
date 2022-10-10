import * as _ from 'lodash';
import { IsEnum, IsDefined, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ILedgerVotingTemplate, LedgerVotingStepCoinTemplate, LedgerVotingStepRoleTemplate, LedgerVotingStepTemplate } from '../voting/template';
import { LedgerVotingStepType } from '../voting';

export enum LedgerCompanyRegulationType {
    // COIN_ADD = 'COIN_ADD',
    COIN_EMIT = 'COMPANY_COIN_EMIT',
    // COIN_BURN = 'COIN_BURN',

    PROJECT_ADD = 'COMPANY_PROJECT_ADD',
    // PROJECT_EDIT = 'PROJECT_EDIT',
    // PROJECT_REMOVE = 'PROJECT_REMOVE',

    EXPERT_ADD = 'COMPANY_EXPERT_ADD',
    EXPERT_REMOVE = 'COMPANY_EXPERT_REMOVE',

    PROTECTOR_ADD = 'COMPANY_PROTECTOR_ADD',
    PROTECTOR_REMOVE = 'COMPANY_PROTECTOR_REMOVE',

    // REGULATION_ADD = 'REGULATION_ADD',
    // REGULATION_CHANGE = 'REGULATION_CHANGE',
    // REGULATION_REMOVE = 'REGULATION_REMOVE',
}

export interface ILedgerCompanyRegulation extends ILedgerVotingTemplate<LedgerCompanyRegulationType> { }

export class LedgerCompanyRegulation implements ILedgerCompanyRegulation {
    @IsEnum(LedgerCompanyRegulationType)
    public type: LedgerCompanyRegulationType;

    @Type(() => LedgerVotingStepTemplate, {
        discriminator: {
            property: 'type',
            subTypes: [
                { name: LedgerVotingStepType.ROLE, value: LedgerVotingStepRoleTemplate },
                { name: LedgerVotingStepType.COIN, value: LedgerVotingStepCoinTemplate },
            ]
        },
        keepDiscriminatorProperty: true,
    })
    @IsDefined()
    @ValidateNested()
    public steps: Array<LedgerVotingStepTemplate>;
}
