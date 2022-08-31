import { TransformUtil } from '@ts-core/common';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerUser } from '../../../ledger/user';
import { ITraceable } from '@ts-core/common';
import { Matches } from 'class-validator';
import { LedgerCompany } from '../../../ledger/company';
import { LedgerCompanyRole } from '../../../ledger/role';

export class CompanyUserRoleListCommand extends ChaincodeTransportCommandAsync<ICompanyUserRoleListDto, ICompanyUserRoleListDtoResponse> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COMPANY_USER_ROLE_LIST;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICompanyUserRoleListDto) {
        super(CompanyUserRoleListCommand.NAME, TransformUtil.toClass(CompanyUserRoleListDto, request), null, true);
    }
}

export interface ICompanyUserRoleListDto extends ITraceable {
    userUid: string;
    companyUid: string;
}

export type ICompanyUserRoleListDtoResponse = Array<LedgerCompanyRole>;

class CompanyUserRoleListDto implements ICompanyUserRoleListDto {
    @Matches(LedgerUser.UID_REG_EXP)
    userUid: string;

    @Matches(LedgerCompany.UID_REG_EXP)
    companyUid: string;
}
