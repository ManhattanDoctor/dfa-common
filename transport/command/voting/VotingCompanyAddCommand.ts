import { TransformUtil } from '@ts-core/common';
import { Matches, IsDefined, ValidateNested, IsString } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerCompany, LedgerCompanyRegulationType } from '../../../ledger/company';
import { ILedgerCompanyVotingProposal, LedgerCompanyVoting, LedgerCompanyVotingProposal } from '../../../ledger/company/voting';

export class VotingCompanyAddCommand extends ChaincodeTransportCommandAsync<IVotingCompanyAddDto, LedgerCompanyVoting> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.VOTING_COMPANY_ADD;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IVotingCompanyAddDto) {
        super(VotingCompanyAddCommand.NAME, TransformUtil.toClass(VotingCompanyAddDto, request));
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

export interface IVotingCompanyAddDto {
    companyUid: string;
    type: LedgerCompanyRegulationType;
    proposal: ILedgerCompanyVotingProposal;
}

export class VotingCompanyAddDto implements IVotingCompanyAddDto {
    @Matches(LedgerCompany.UID_REG_EXP)
    companyUid: string;

    @IsString()
    type: LedgerCompanyRegulationType;

    @IsDefined()
    @ValidateNested()
    proposal: LedgerCompanyVotingProposal;
}
