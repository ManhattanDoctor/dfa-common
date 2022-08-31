import * as _ from 'lodash';

export type LedgerRegulation<T> = {
    [P in keyof T]?: number | ILedgerRegulationCondition<T>
};

export interface ILedgerRegulationCondition<T> {}

