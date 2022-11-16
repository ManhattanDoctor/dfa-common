import { MathUtil, UnreachableStatementError } from '@ts-core/common';
import * as _ from 'lodash';
import { ILedgerVote, LedgerVoteType, LedgerVotingList } from '../LedgerVotingList';

export class LedgerVotingListCoin extends LedgerVotingList<string> {
    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static create(): LedgerVotingListCoin {
        let item = new LedgerVotingListCoin();
        item.storage = new Object();
        return item;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    private _votesFor: string;
    private _votesAgainst: string;

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public vote(uid: string, value: ILedgerVote<string>): void {
        super.vote(uid, value);
        switch (value.type) {
            case LedgerVoteType.FOR:
                this._votesFor = MathUtil.add(this.votesFor, value.value);
                break;
            case LedgerVoteType.AGAINST:
                this._votesAgainst = MathUtil.add(this.votesAgainst, value.value);
                break;
            default:
                throw new UnreachableStatementError(value.type);
        }
    }

    // --------------------------------------------------------------------------
    //
    //  Public Properties
    //
    // --------------------------------------------------------------------------

    public get votesResult(): string {
        return MathUtil.subtract(this.votesFor, this.votesAgainst);
    }

    public get votesTotal(): string {
        return MathUtil.add(this._votesAgainst, this.votesFor);
    }

    public get votesFor(): string {
        return !_.isNil(this._votesFor) ? this._votesFor : '0';
    }

    public get votesAgainst(): string {
        return !_.isNil(this._votesAgainst) ? this._votesAgainst : '0';
    }
}