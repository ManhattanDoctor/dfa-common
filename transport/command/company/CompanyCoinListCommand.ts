import { TransformUtil } from '@ts-core/common';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerCoin } from '../../../ledger/coin';
import { ICoinListDtoResponse, ICoinListDto } from '../coin';

export class CompanyCoinListCommand extends ChaincodeTransportCommandAsync<ICompanyCoinListDto, ICoinListDtoResponse> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COMPANY_COIN_LIST;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICompanyCoinListDto) {
        super(CompanyCoinListCommand.NAME, request, null, true);
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

export interface ICompanyCoinListDto extends ICoinListDto {
    companyUid: string;
}
