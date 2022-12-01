import { MathUtil, UnreachableStatementError } from '@ts-core/common';
import * as _ from 'lodash';
import { ILedgerVote, LedgerVoteType, LedgerVotingList, LedgerVotingRole } from '../LedgerVotingList';

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

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public vote(uid: string, value: ILedgerVote<LedgerVotingRole>): void {
        super.vote(uid, value);
        switch (value.type) {
            case LedgerVoteType.FOR:
                this._votesFor = MathUtil.add(this.votesFor, '1');
                break;
            case LedgerVoteType.AGAINST:
                this._votesAgainst = MathUtil.add(this.votesAgainst, '1');
                break;
            default:
                throw new UnreachableStatementError(value.type);
        }
    }
}