import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested, IsInt, Matches } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { ILedgerVote, LedgerVote } from '../../../ledger/voting/LedgerVotingList';
import { LedgerVoting } from '../../../ledger/voting/LedgerVoting';

export class VotingVoteCommand extends ChaincodeTransportCommandAsync<IVotingVoteDto, IVotingVoteDtoResponse> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.VOTING_VOTE;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IVotingVoteDto) {
        super(VotingVoteCommand.NAME, TransformUtil.toClass(VotingVoteDto, request));
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: IVotingVoteDtoResponse): VotingVoteDtoResponse {
        return TransformUtil.toClass(VotingVoteDtoResponse, item);
    }
}

export interface IVotingVoteDto extends ITraceable {
    uid: string;
    value: ILedgerVote;
}
export interface IVotingVoteDtoResponse {
    stepIndex: number;
}

class VotingVoteDto implements IVotingVoteDto {
    @Matches(LedgerVoting.UID_REG_EXP)
    uid: string;

    @IsOptional()
    @Type(() => LedgerVote)
    @ValidateNested()
    value: LedgerVote;
}
class VotingVoteDtoResponse implements IVotingVoteDtoResponse {
    @IsInt()
    stepIndex: number;
}
