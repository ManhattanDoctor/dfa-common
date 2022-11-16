import * as _ from 'lodash';
import { LedgerVotingList, LedgerVotingRole } from '../LedgerVotingList';

export class LedgerVotingListRole extends LedgerVotingList<LedgerVotingRole> {
    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static create(): LedgerVotingListRole {
        let item = new LedgerVotingListRole();
        item.storage = new Object();
        return item;
    }
}