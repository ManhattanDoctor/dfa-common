
import { IsNumber, Min, Max } from 'class-validator';
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
    @Min(1)
    @Max(100)
    @IsNumber()
    percent: number;

    @IsNumber()
    duration: number;
}

