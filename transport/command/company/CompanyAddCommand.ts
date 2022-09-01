import { ITraceable, TransformUtil } from '@ts-core/common';
import { Matches, IsDefined, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerCompany, LedgerCompanyRegulation } from '../../../ledger/company';
import { RegExpUtil } from '../../../util';
import { LedgerUser } from '../../../ledger/user';

export class CompanyAddCommand extends ChaincodeTransportCommandAsync<ICompanyAddDto, LedgerCompany> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COMPANY_ADD;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICompanyAddDto) {
        super(CompanyAddCommand.NAME, TransformUtil.toClass(CompanyAddDto, request));
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: LedgerCompany): LedgerCompany {
        return TransformUtil.toClass(LedgerCompany, item);
    }

}

export interface ICompanyAddDto extends ITraceable {
    ownerUid: string;
    regulation: LedgerCompanyRegulation;
    description: string;
}

export class CompanyAddDto implements ICompanyAddDto {
    @Matches(LedgerUser.UID_REG_EXP)
    ownerUid: string;

    @Matches(RegExpUtil.DESCRIPTION_REG_EXP)
    description: string;

    @Type(() => LedgerCompanyRegulation)
    @IsDefined()
    @ValidateNested()
    regulation: LedgerCompanyRegulation;
}
