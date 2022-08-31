import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { LedgerCompany } from '../../../ledger/company';
import { Length, IsOptional, Matches } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { RegExpUtil, ValidateUtil } from '../../../util';

export class CompanyEditCommand extends ChaincodeTransportCommandAsync<ICompanyEditDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COMPANY_EDIT;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICompanyEditDto) {
        super(CompanyEditCommand.NAME, TransformUtil.toClass(CompanyEditDto, request));
    }
}

export interface ICompanyEditDto extends ITraceable {
    uid: string;
    description?: string;
}

class CompanyEditDto implements ICompanyEditDto {
    @Matches(LedgerCompany.UID_REG_EXP)
    uid: string;

    @IsOptional()
    @Matches(RegExpUtil.DESCRIPTION_REG_EXP)
    description?: string;
}
