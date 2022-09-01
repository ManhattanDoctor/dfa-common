
import { IsNumber } from 'class-validator';
import * as _ from 'lodash';

export interface ILedgerRegulation<T> {
    name: T;
    condition: ILedgerRegulationCondition;
};

export interface ILedgerRegulationCondition {
    percent: number;
    duration: number;
}

export class LedgerRegulationCondition implements ILedgerRegulationCondition {
    @IsNumber()
    percent: number;

    @IsNumber()
    duration: number;
}

