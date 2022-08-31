import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { Matches, IsOptional, IsEnum } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerCompany } from '../../../ledger/company';
import { LedgerUser } from '../../../ledger/user';
import { LedgerRole, LedgerCompanyRole } from '../../../ledger/role';

export class CompanyUserAddCommand extends ChaincodeTransportCommandAsync<ICompanyUserAddDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COMPANY_USER_ADD;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICompanyUserAddDto) {
        super(CompanyUserAddCommand.NAME, TransformUtil.toClass(CompanyUserAddDto, request));
    }
}

export interface ICompanyUserAddDto {
    roles: Array<LedgerCompanyRole>;
    userUid: string;
    companyUid: string;
}

// export needs because another command use it
export class CompanyUserAddDto implements ICompanyUserAddDto {
    @Matches(LedgerUser.UID_REG_EXP)
    userUid: string;

    @Matches(LedgerCompany.UID_REG_EXP)
    companyUid: string;

    @IsOptional()
    @IsEnum(LedgerCompanyRole, { each: true })
    roles: Array<LedgerCompanyRole>;
}
