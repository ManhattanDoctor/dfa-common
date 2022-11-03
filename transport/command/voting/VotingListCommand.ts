import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { IPaginationBookmark, PaginableBookmark } from '@ts-core/common';
import { ITraceable } from '@ts-core/common';
import { LedgerVotingFactory, LedgerVotingType } from '../../../ledger/voting';

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
        response.items = response.items.map(LedgerVotingFactory.transform)
        return response;
    }
}

export interface IVotingListDto extends PaginableBookmark<LedgerVotingType>, ITraceable { }
export interface IVotingListDtoResponse extends IPaginationBookmark<LedgerVotingType> { }
