import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { Matches } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerCompany } from '../../../ledger/company';
import { LedgerUser } from '../../../ledger/user';

export class CompanyUserRemoveCommand extends ChaincodeTransportCommandAsync<ICompanyUserRemoveDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COMPANY_USER_REMOVE;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICompanyUserRemoveDto) {
        super(CompanyUserRemoveCommand.NAME, TransformUtil.toClass(CompanyUserRemoveDto, request));
    }
}

export interface ICompanyUserRemoveDto extends ITraceable {
    userUid: string;
    companyUid: string;
}

class CompanyUserRemoveDto implements ICompanyUserRemoveDto {
    @Matches(LedgerUser.UID_REG_EXP)
    userUid: string;

    @Matches(LedgerCompany.UID_REG_EXP)
    companyUid: string;
}
