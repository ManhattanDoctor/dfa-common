import { IsNumberString } from 'class-validator';

export interface ILedgerVotingState {
    votesFor: string;
    votesTotal: string;
    votesResult: string;
    votesAgainst: string;
}

export class LedgerVotingState implements ILedgerVotingState {
    @IsNumberString()
    votesFor: string;

    @IsNumberString()
    votesTotal: string;

    @IsNumberString()
    votesResult: string;

    @IsNumberString()
    votesAgainst: string;
}