import * as _ from 'lodash';
import { IsEnum, IsDefined } from 'class-validator';
import { LedgerError, LedgerErrorCode } from '../error';
import { LedgerCompanyRole } from '../role';

export abstract class LedgerVotingList<T extends LedgerVoteValue = LedgerVoteValue> extends Object {
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

    public vote(uid: string, value: ILedgerVote<T>): ILedgerVote<T> {
        this.checkAlready(uid);
        this[uid] = value;
        return value;
    }

    public get(uid: string): ILedgerVote<T> {
        return this.hasOwnProperty(uid) ? this[uid] : null;
    }
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
