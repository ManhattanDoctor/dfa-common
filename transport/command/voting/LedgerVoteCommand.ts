import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { IsOptional, ValidateNested, Matches } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { ILedgerVote, LedgerVote, LedgerVoting } from '../../../ledger/voting';

export class LedgerVoteCommand extends ChaincodeTransportCommandAsync<ILedgerVoteDto, void> {
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

    constructor(request: ILedgerVoteDto) {
        super(LedgerVoteCommand.NAME, TransformUtil.toClass(LedgerVoteDto, request));
    }
}

export interface ILedgerVoteDto extends ITraceable {
    uid: string;
    value: ILedgerVote;
}

class LedgerVoteDto implements ILedgerVoteDto {
    @Matches(LedgerVoting.UID_REG_EXP)
    uid: string;

    @IsOptional()
    @ValidateNested()
    value: LedgerVote;
}
