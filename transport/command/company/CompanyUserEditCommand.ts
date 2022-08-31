import { TransformUtil } from '@ts-core/common';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { CompanyUserAddDto, ICompanyUserAddDto } from './CompanyUserAddCommand';

export class CompanyUserEditCommand extends ChaincodeTransportCommandAsync<ICompanyUserAddDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COMPANY_USER_EDIT;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICompanyUserAddDto) {
        super(CompanyUserEditCommand.NAME, TransformUtil.toClass(CompanyUserAddDto, request));
    }
}
