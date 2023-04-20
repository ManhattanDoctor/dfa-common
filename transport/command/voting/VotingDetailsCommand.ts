import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { Matches } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerVoting, LedgerVotingDetails } from '../../../ledger/voting';
import * as _ from 'lodash';

export class VotingDetailsCommand extends ChaincodeTransportCommandAsync<IVotingDetailsDto, IVotingDetailsDtoResponse> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.VOTING_DETAILS;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IVotingDetailsDto) {
        super(VotingDetailsCommand.NAME, TransformUtil.toClass(VotingDetailsDto, request), null, true);
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: IVotingDetailsDtoResponse): IVotingDetailsDtoResponse {
        return { details: item.details }
    }
}

export interface IVotingDetailsDto extends ITraceable {
    uid: string;
}

export type IVotingDetailsDtoResponse = LedgerVotingDetails;

class VotingDetailsDto implements IVotingDetailsDto {
    @Matches(LedgerVoting.UID_REG_EXP)
    uid: string;
}
