import { IsNumberString } from 'class-validator';

export class LedgerVotingState {
    @IsNumberString()
    votesFor: string;

    @IsNumberString()
    votesTotal: string;

    @IsNumberString()
    votesResult: string;

    @IsNumberString()
    votesAgainst: string;
}