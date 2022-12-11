import { ILedgerVote, LedgerVoteValue } from '../../../ledger/voting';

export interface IVotingVoteDto<T extends LedgerVoteValue = LedgerVoteValue> {
    id: number;
    value: ILedgerVote<T>
}
