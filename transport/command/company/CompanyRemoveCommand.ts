import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { LedgerCompany } from '../../../ledger/company';
import { Matches } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';

export class CompanyRemoveCommand extends ChaincodeTransportCommandAsync<ICompanyRemoveDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COMPANY_REMOVE;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICompanyRemoveDto) {
        super(CompanyRemoveCommand.NAME, TransformUtil.toClass(CompanyRemoveDto, request));
    }
}

export interface ICompanyRemoveDto extends ITraceable {
    uid: string;
}

class CompanyRemoveDto implements ICompanyRemoveDto {
    @Matches(LedgerCompany.UID_REG_EXP)
    uid: string;
}
