
import * as _ from 'lodash';
import { LedgerVotingStatus } from '../../ledger/voting';
import { CompanyVoting } from '../company';

export class VotingUtil {

    // --------------------------------------------------------------------------
    //
    //  Company Methods
    //
    // --------------------------------------------------------------------------

    public static isCanVote(item: CompanyVoting): boolean {
        return item.status === LedgerVotingStatus.IN_PROGRESS;
    }
}
