
import * as _ from 'lodash';
import { LedgerVotingStatus } from '../../ledger/voting';
import { VotingCompany } from '../voting/company';

export class VotingUtil {
    // --------------------------------------------------------------------------
    //
    //  Company Methods
    //
    // --------------------------------------------------------------------------

    public static isCanVote(item: VotingCompany): boolean {
        return item.status === LedgerVotingStatus.IN_PROGRESS;
    }
}
