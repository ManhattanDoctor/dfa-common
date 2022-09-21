import * as _ from 'lodash';

export class LedgerVotingList extends Object {
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public get(uid: string): string {
        return this[uid];
    }

    public set(uid: string, value: string): string {
        this[uid] = value;
        return value;
    }

    public has(uid: string): boolean {
        return !_.isNil(this.get(uid));
    }
}