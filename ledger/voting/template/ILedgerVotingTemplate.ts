
import * as _ from 'lodash';
import { ILedgerVotingStepTemplate } from './LedgerVotingStepTemplate';

export interface ILedgerVotingTemplate<T, U extends ILedgerVotingStepTemplate = ILedgerVotingStepTemplate> {
    type: T;
    steps: Array<U>;
};
