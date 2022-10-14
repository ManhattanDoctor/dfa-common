import { MathUtil } from '@ts-core/common';
import * as _ from 'lodash';
import { LedgerVotingList } from '../LedgerVotingList';

export class LedgerVotingListCoin extends LedgerVotingList<string> {
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

    public for(uid: string, value: string): string {
        super.for(uid, value);
        this[uid] = `${value}`;
        this._votesFor = MathUtil.add(this.votesFor, value);
        return value;
    }

    public against(uid: string, value: string): string {
        super.against(uid, value);
        this[uid] = `-${value}`;
        this._votesAgainst = MathUtil.add(this.votesAgainst, value);
        return value;
    }

    // --------------------------------------------------------------------------
    //
    //  Public Properties
    //
    // --------------------------------------------------------------------------

    public get result(): string {
        return MathUtil.subtract(this.votesFor, this.votesAgainst);
    }

    public get total(): string {
        return MathUtil.add(this.votesAgainst, this.votesFor);
    }

    public get votesFor(): string {
        return !_.isNil(this._votesFor) ? this._votesFor : '0';
    }

    public get votesAgainst(): string {
        return !_.isNil(this._votesAgainst) ? this._votesAgainst : '0';
    }
}