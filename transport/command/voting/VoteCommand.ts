import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { IsOptional, ValidateNested, Matches } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { ILedgerVote, LedgerVote } from '../../../ledger/voting/LedgerVotingList';
import { LedgerVoting } from '../../../ledger/voting/LedgerVoting';

export class VoteCommand extends ChaincodeTransportCommandAsync<IVoteDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.VOTE;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IVoteDto) {
        super(VoteCommand.NAME, TransformUtil.toClass(VoteDto, request));
    }
}

export interface IVoteDto extends ITraceable {
    uid: string;
    value: ILedgerVote;
}

class VoteDto implements IVoteDto {
    @Matches(LedgerVoting.UID_REG_EXP)
    uid: string;

    @IsOptional()
    @ValidateNested()
    value: LedgerVote;
}
