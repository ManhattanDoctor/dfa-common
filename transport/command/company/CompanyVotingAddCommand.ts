import { TransformUtil } from '@ts-core/common';
import { Matches, IsDefined, ValidateNested, IsEnum } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerCompany, LedgerCompanyRegulationType } from '../../../ledger/company';
import { ILedgerCompanyVotingProposal, LedgerCompanyVoting, LedgerCompanyVotingProposal } from '../../../ledger/company/voting';

export class CompanyVotingAddCommand extends ChaincodeTransportCommandAsync<ICompanyVotingAddDto, LedgerCompanyVoting> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COMPANY_VOTING_ADD;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICompanyVotingAddDto) {
        super(CompanyVotingAddCommand.NAME, TransformUtil.toClass(CompanyVotingAddDto, request));
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: LedgerCompanyVoting): LedgerCompanyVoting {
        return TransformUtil.toClass(LedgerCompanyVoting, item);
    }
}

export interface ICompanyVotingAddDto {
    companyUid: string;
    type: LedgerCompanyRegulationType;
    proposal: ILedgerCompanyVotingProposal;
}

export class CompanyVotingAddDto implements ICompanyVotingAddDto {
    @Matches(LedgerCompany.UID_REG_EXP)
    companyUid: string;

    @IsEnum(LedgerCompanyRegulationType)
    type: LedgerCompanyRegulationType;

    @IsDefined()
    @ValidateNested()
    proposal: LedgerCompanyVotingProposal;
}
