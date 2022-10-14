import * as _ from 'lodash';
import { LedgerCompanyRole } from '../../role/LedgerCompanyRole';
import { LedgerVotingList } from '../LedgerVotingList';

export type LedgerVotingRole = LedgerCompanyRole;

export class LedgerVotingListRole extends LedgerVotingList<LedgerVotingRole> {
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public for(uid: string, value: LedgerVotingRole): LedgerVotingRole {
        super.for(uid, value);
        this[uid] = value;
        return value;
    }

    public against(uid: string, value: LedgerVotingRole): LedgerVotingRole {
        super.against(uid, value);
        this[uid] = value;
        return value;
    }
}