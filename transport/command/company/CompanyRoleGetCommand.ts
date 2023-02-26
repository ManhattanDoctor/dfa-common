import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { ITraceable } from '@ts-core/common';
import { LedgerCompanyRoleStorage } from '../../../ledger/company/LedgerCompanyRoleList';

export class CompanyRoleGetCommand extends ChaincodeTransportCommandAsync<ICompanyRoleGetDto, ICompanyRoleGetDtoResponse> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COMPANY_ROLE_GET;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICompanyRoleGetDto) {
        super(CompanyRoleGetCommand.NAME, request, null, true);
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(response: ICompanyRoleGetDtoResponse): ICompanyRoleGetDtoResponse {
        return response;
    }
}

export interface ICompanyRoleGetDto extends ITraceable {
    uid: string;
}

export type ICompanyRoleGetDtoResponse = LedgerCompanyRoleStorage;
