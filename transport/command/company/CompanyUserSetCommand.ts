import { TransformUtil } from '@ts-core/common';
import { Matches, IsOptional, IsEnum } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerCompany } from '../../../ledger/company';
import { LedgerUser } from '../../../ledger/user';
import { LedgerCompanyRole } from '../../../ledger/role';

export class CompanyUserSetCommand extends ChaincodeTransportCommandAsync<ICompanyUserSetDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COMPANY_USER_SET;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICompanyUserSetDto) {
        super(CompanyUserSetCommand.NAME, TransformUtil.toClass(CompanyUserSetDto, request));
    }
}

export interface ICompanyUserSetDto {
    roles: Array<LedgerCompanyRole>;
    userUid: string;
    companyUid: string;
}

class CompanyUserSetDto implements ICompanyUserSetDto {
    @Matches(LedgerUser.UID_REG_EXP)
    userUid: string;

    @Matches(LedgerCompany.UID_REG_EXP)
    companyUid: string;

    @IsOptional()
    @IsEnum(LedgerCompanyRole, { each: true })
    roles: Array<LedgerCompanyRole>;
}
