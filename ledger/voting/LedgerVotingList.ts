import * as _ from 'lodash';
import { IsEnum, IsDefined } from 'class-validator';
import { LedgerCompanyRole } from '../role/LedgerCompanyRole';
import { LedgerBadRequestError } from '../error/LedgerError';

export abstract class LedgerVotingList<T extends LedgerVoteValue = LedgerVoteValue>  {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    private _storage: Object;

    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------

    protected checkAlready(uid: string): void {
        let exists = this.get(uid);
        if (!_.isNil(exists)) {
            throw new LedgerBadRequestError(`"${uid}" already voted`)
        }
    }

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public vote(uid: string, value: ILedgerVote<T>): void {
        this.checkAlready(uid);
        this.storage[uid] = value;
    }

    public get(uid: string): ILedgerVote<T> {
        return this.storage.hasOwnProperty(uid) ? this.storage[uid] : null;
    }

    // --------------------------------------------------------------------------
    //
    //  Public Properties
    //
    // --------------------------------------------------------------------------

    public get voters(): Array<IVote> {
        return Object.entries(this.storage).map(item => {
            return { uid: item[0], value: item[1] };
        })
    }

    public get storage(): Object {
        if (_.isNil(this._storage)) {
            this._storage = new Object();
        }
        return this._storage;
    }
}
export interface IVote {
    uid: string;
    value: ILedgerVote;
}

export enum LedgerVoteType {
    FOR = 'FOR',
    AGAINST = 'AGAINST'
}

export type LedgerVotingRole = LedgerCompanyRole;

export type LedgerVoteValue = string | LedgerVotingRole;

export interface ILedgerVote<T extends LedgerVoteValue = LedgerVoteValue> {
    type: LedgerVoteType;
    value: T;
}

export class LedgerVote<T extends LedgerVoteValue = LedgerVoteValue> {
    @IsEnum(LedgerVoteType)
    type: LedgerVoteType;

    @IsDefined()
    value: T;
}
