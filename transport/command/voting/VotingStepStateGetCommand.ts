import { ITraceable } from '@ts-core/common';
import { Type } from 'class-transformer';
import { TransformUtil } from '@ts-core/common';
import { Matches, IsDate, IsOptional, IsInt, IsDefined, ValidateNested } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerVotingState } from '../../../ledger/voting/LedgerVotingState';
import { LedgerVoting } from '../../../ledger/voting/LedgerVoting';
import * as _ from 'lodash';
import { ILedgerVotingStepState } from '../../../ledger/voting/step';

export class VotingStepStateGetCommand extends ChaincodeTransportCommandAsync<IVotingStepStateGetDto, ILedgerVotingStepState> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.VOTING_STEP_STATE_GET;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IVotingStepStateGetDto) {
        super(VotingStepStateGetCommand.NAME, TransformUtil.toClass(VotingStepStateGetDto, request), null, true);
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: ILedgerVotingStepState): ILedgerVotingStepState {
        return TransformUtil.toClass(VotingStepStateGetDtoResponse, item);
    }
}

export interface IVotingStepStateGetDto extends ITraceable {
    uid: string;
    stepIndex: number;
}

class VotingStepStateGetDto implements IVotingStepStateGetDto {
    @Matches(LedgerVoting.UID_REG_EXP)
    uid: string;

    @IsInt()
    stepIndex: number;
}

class VotingStepStateGetDtoResponse implements ILedgerVotingStepState {
    @Type(() => LedgerVotingState)
    @IsDefined()
    @ValidateNested()
    state: LedgerVotingState;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    startedDate: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    expiredDate: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    finishedDate: Date;
}

