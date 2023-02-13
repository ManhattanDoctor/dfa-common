import { LedgerVotingCompany } from '../../../ledger/voting/company/LedgerVotingCompany';
import { ledgerVotingTransform } from '../../../ledger/voting/LedgerVotingTransform';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { IVotingListDto, IVotingListDtoResponse } from '../voting/VotingListCommand';

export class VotingCompanyListCommand extends ChaincodeTransportCommandAsync<IVotingCompanyListDto, IVotingListDtoResponse> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.VOTING_COMPANY_LIST;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IVotingCompanyListDto) {
        super(VotingCompanyListCommand.NAME, request, null, true);
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

export interface IVotingCompanyListDto extends IVotingListDto<LedgerVotingCompany> {
    companyUid: string;
}
