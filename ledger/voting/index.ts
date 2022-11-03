import { TransformUtil } from '@ts-core/common';
import { LedgerCompanyVoting } from '../company/voting';
import { LedgerVoting } from './LedgerVoting';

export * from './LedgerVoting';
export * from './LedgerVotingList';
export * from './LedgerVotingFactory';
export * from './LedgerVotingStepType';

export function ledgerVotingTransform(item: LedgerVoting): LedgerCompanyVoting {
    return TransformUtil.toClass(LedgerCompanyVoting, item);
}