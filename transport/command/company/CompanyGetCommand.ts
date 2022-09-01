import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { IsOptional, Matches, IsArray } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerCompany } from '../../../ledger/company';
import * as _ from 'lodash';

export class CompanyGetCommand extends ChaincodeTransportCommandAsync<ICompanyGetDto, LedgerCompany> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COMPANY_GET;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICompanyGetDto) {
        super(CompanyGetCommand.NAME, TransformUtil.toClass(CompanyGetDto, request), null, true);
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

export interface ICompanyGetDto extends ITraceable {
    uid: string;
    details?: Array<keyof LedgerCompany>;
}

class CompanyGetDto implements ICompanyGetDto {
    @Matches(LedgerCompany.UID_REG_EXP)
    uid: string;

    @IsArray()
    @IsOptional()
    details?: Array<keyof LedgerCompany>;
}
