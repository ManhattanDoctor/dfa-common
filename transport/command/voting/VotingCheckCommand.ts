import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { Matches } from 'class-validator';
import { LedgerVoting } from '../../../ledger/voting';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';

export class VotingCheckCommand extends ChaincodeTransportCommandAsync<IVotingCheckDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.VOTING_CHECK;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IVotingCheckDto) {
        super(VotingCheckCommand.NAME, TransformUtil.toClass(VotingCheckDto, request));
    }
}

export interface IVotingCheckDto extends ITraceable {
    uid: string;
}
class VotingCheckDto implements IVotingCheckDto {
    @Matches(LedgerVoting.UID_REG_EXP)
    uid: string;
}