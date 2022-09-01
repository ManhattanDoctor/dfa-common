import * as _ from 'lodash';
import { ILedgerRegulation, ILedgerRegulationCondition, LedgerRegulationCondition } from '../regulation';
import { IsEnum, IsDefined, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export enum LedgerCompanyRegulationType {
    COIN_ADD = 'COIN_ADD',
    COIN_EMIT = 'COIN_EMIT',
    COIN_BURN = 'COIN_BURN',

    PROJECT_ADD = 'PROJECT_ADD',
    PROJECT_EDIT = 'PROJECT_EDIT',
    PROJECT_REMOVE = 'PROJECT_REMOVE',

    EXPERT_ADD = 'EXPERT_ADD',
    EXPERT_REMOVE = 'EXPERT_REMOVE',

    PROTECTOR_ADD = 'PROTECTOR_ADD',
    PROTECTOR_REMOVE = 'PROTECTOR_REMOVE',

    REGULATION_CHANGE = 'REGULATION_CHANGE',
}

export interface ILedgerCompanyRegulation extends ILedgerRegulation<LedgerCompanyRegulationType> { }

export class LedgerCompanyRegulation implements ILedgerCompanyRegulation {
    @IsEnum(LedgerCompanyRegulationType)
    name: LedgerCompanyRegulationType;;

    @Type(() => LedgerRegulationCondition)
    @IsDefined()
    @ValidateNested()
    condition: LedgerRegulationCondition;
}
