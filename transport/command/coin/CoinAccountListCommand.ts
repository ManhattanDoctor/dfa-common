import { IPaginationBookmark, ITraceable, PaginableBookmark, TransformUtil } from '@ts-core/common';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerCoinAccount } from '../../../ledger/coin';

export class CoinAccountListCommand extends ChaincodeTransportCommandAsync<ICoinAccountListDto, ICoinAccountListDtoResponse> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COIN_ACCOUNT_LIST;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinAccountListDto) {
        super(CoinAccountListCommand.NAME, request, null, true);
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(response: ICoinAccountListDtoResponse): ICoinAccountListDtoResponse {
        response.items = TransformUtil.toClassMany(LedgerCoinAccount, response.items);
        return response;
    }
}

export interface ICoinAccountListDto extends PaginableBookmark<LedgerCoinAccount>, ITraceable {
    coinUid: string;
}
export interface ICoinAccountListDtoResponse extends IPaginationBookmark<LedgerCoinAccount> {}
