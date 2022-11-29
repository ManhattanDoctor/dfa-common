import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { IPaginationBookmark, PaginableBookmark } from '@ts-core/common';
import { ITraceable } from '@ts-core/common';
import { LedgerVoting } from '../../../ledger/voting/LedgerVoting';
import { ledgerVotingTransform } from '../../../ledger/voting/LedgerVotingTransform';

export class VotingListCommand extends ChaincodeTransportCommandAsync<IVotingListDto, IVotingListDtoResponse> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.VOTING_LIST;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IVotingListDto) {
        super(VotingListCommand.NAME, request, null, true);
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(response: IVotingListDtoResponse): IVotingListDtoResponse {
        response.items = response.items.map(ledgerVotingTransform);
        return response;
    }
}

export interface IVotingListDto<T extends LedgerVoting = LedgerVoting> extends PaginableBookmark<T>, ITraceable { }
export interface IVotingListDtoResponse<T extends LedgerVoting = LedgerVoting> extends IPaginationBookmark<T> { }
