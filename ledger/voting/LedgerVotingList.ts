import * as _ from 'lodash';
import { IsEnum, IsDefined } from 'class-validator';
import { LedgerCompanyRole } from '../role/LedgerCompanyRole';
import { LedgerBadRequestError } from '../error/LedgerError';
import { MathUtil } from '@ts-core/common';
import { ILedgerVotingState } from './LedgerVotingState';

export class LedgerVotingList<T extends LedgerVoteValue = LedgerVoteValue> implements ILedgerVotingState {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    public storage: Object;

    protected _votesFor: string;
    protected _votesAgainst: string;

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

    public stateGet(): ILedgerVotingState {
        return { votesFor: this.votesFor, votesTotal: this.votesTotal, votesResult: this.votesResult, votesAgainst: this.votesAgainst };
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


    public get votesResult(): string {
        return MathUtil.subtract(this.votesFor, this.votesAgainst);
    }

    public get votesTotal(): string {
        return MathUtil.add(this.votesAgainst, this.votesFor);
    }

    public get votesFor(): string {
        return !_.isNil(this._votesFor) ? this._votesFor : '0';
    }

    public get votesAgainst(): string {
        return !_.isNil(this._votesAgainst) ? this._votesAgainst : '0';
    }
}
export interface IVote<T extends LedgerVoteValue = LedgerVoteValue> {
    uid: string;
    value: ILedgerVote<T>;
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
