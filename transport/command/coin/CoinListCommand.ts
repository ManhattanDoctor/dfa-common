import { IPaginationBookmark, ITraceable, PaginableBookmark, TransformUtil } from "@ts-core/common";
import { LedgerCoin } from "../../../ledger/coin";
import { ChaincodeTransportCommandAsync, LedgerCommand } from "../LedgerCommand";

export class CoinListCommand extends ChaincodeTransportCommandAsync<ICoinListDto, ICoinListDtoResponse> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COIN_LIST;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinListDto) {
        super(CoinListCommand.NAME, request, null, true);
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(response: ICoinListDtoResponse): ICoinListDtoResponse {
        response.items = TransformUtil.toClassMany(LedgerCoin, response.items);
        return response;
    }
}

export interface ICoinListDto extends PaginableBookmark<LedgerCoin>, ITraceable { }
export interface ICoinListDtoResponse extends IPaginationBookmark<LedgerCoin> { }
