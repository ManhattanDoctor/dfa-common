import { IsNumberString, IsNumber } from 'class-validator';

export interface ILedgerVotingState {
    votesFor: string;
    votesForPercent?: number;

    votesTotal: string;
    votesTotalPercent?: number;

    votesResult: string;
    votesResultPercent?: number;

    votesAgainst: string;
    votesAgainstPercent?: number;
}

export class LedgerVotingState implements ILedgerVotingState {
    @IsNumberString()
    votesFor: string;
    @IsNumber()
    votesForPercent: number;

    @IsNumberString()
    votesTotal: string;
    @IsNumber()
    votesTotalPercent: number;

    @IsNumberString()
    votesResult: string;
    @IsNumber()
    votesResultPercent: number;;

    @IsNumberString()
    votesAgainst: string;
    @IsNumber()
    votesAgainstPercent: number;
}