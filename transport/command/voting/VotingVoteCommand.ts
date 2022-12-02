import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { IsOptional, ValidateNested, IsInt, Matches } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { ILedgerVote, LedgerVote } from '../../../ledger/voting/LedgerVotingList';
import { LedgerVoting } from '../../../ledger/voting/LedgerVoting';

export class VotingVoteCommand extends ChaincodeTransportCommandAsync<IVoteDto, IVoteDtoResponse> {
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

    constructor(request: IVoteDto) {
        super(VotingVoteCommand.NAME, TransformUtil.toClass(VoteDto, request));
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: IVoteDtoResponse): VoteDtoResponse {
        return TransformUtil.toClass(VoteDtoResponse, item);
    }
}

export interface IVoteDto extends ITraceable {
    uid: string;
    value: ILedgerVote;
}
export interface IVoteDtoResponse {
    stepIndex: number;
}

class VoteDto implements IVoteDto {
    @Matches(LedgerVoting.UID_REG_EXP)
    uid: string;

    @IsOptional()
    @ValidateNested()
    value: LedgerVote;
}
class VoteDtoResponse implements IVoteDtoResponse {
    @IsInt()
    stepIndex: number;
}
