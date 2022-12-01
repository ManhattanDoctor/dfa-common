import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { Matches, IsInt } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerVotingState } from '../../../ledger/voting/LedgerVotingState';
import { LedgerVoting } from '../../../ledger/voting/LedgerVoting';
import * as _ from 'lodash';

export class VotingStateGetCommand extends ChaincodeTransportCommandAsync<IVotingStateGetDto, LedgerVotingState> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.VOTING_STATE_GET;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IVotingStateGetDto) {
        super(VotingStateGetCommand.NAME, TransformUtil.toClass(VotingStateGetDto, request), null, true);
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: LedgerVotingState): LedgerVotingState {
        return TransformUtil.toClass(LedgerVotingState, item);
    }
}

export interface IVotingStateGetDto extends ITraceable {
    uid: string;
    stepIndex: number;
}

class VotingStateGetDto implements IVotingStateGetDto {
    @Matches(LedgerVoting.UID_REG_EXP)
    uid: string;

    @IsInt()
    stepIndex: number;
}

