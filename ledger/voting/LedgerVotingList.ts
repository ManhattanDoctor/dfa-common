import * as _ from 'lodash';
import { LedgerError, LedgerErrorCode } from '../error/LedgerError';

export abstract class LedgerVotingList<T> extends Object {
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------

    protected checkAlready(uid: string): void {
        let exists = this.get(uid);
        if (!_.isNil(exists)) {
            throw new LedgerError(LedgerErrorCode.BAD_REQUEST, `"${uid}" already voted`)
        }
    }

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public for(uid: string, value: T): T {
        this.checkAlready(uid);
        return value;
    }

    public against(uid: string, value: T): T {
        this.checkAlready(uid);
        return value;
    }

    public get(uid: string): T {
        return this.hasOwnProperty(uid) ? this[uid] : null;
    }
}