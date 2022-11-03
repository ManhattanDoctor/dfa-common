import { LedgerCompanyVoting } from '@project/common/ledger/company/voting';
import { LedgerVotingFactory } from '@project/common/ledger/voting';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { IVotingListDto, IVotingListDtoResponse } from '../voting/VotingListCommand';

export class CompanyVotingListCommand extends ChaincodeTransportCommandAsync<ICompanyVotingListDto, IVotingListDtoResponse> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COMPANY_VOTING_LIST;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICompanyVotingListDto) {
        super(CompanyVotingListCommand.NAME, request, null, true);
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(response: IVotingListDtoResponse): IVotingListDtoResponse {
        response.items = response.items.map(LedgerVotingFactory.transform);
        return response;
    }
}

export interface ICompanyVotingListDto extends IVotingListDto<LedgerCompanyVoting> {
    companyUid: string;
}
