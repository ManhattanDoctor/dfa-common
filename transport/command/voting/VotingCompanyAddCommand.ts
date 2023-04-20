import { TransformUtil } from '@ts-core/common';
import { Type, Transform } from 'class-transformer';
import { Matches, IsDefined, ValidateNested, IsString } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerCompany, LedgerCompanyRegulationType } from '../../../ledger/company';
import { ILedgerVotingCompanyProposal, LedgerVotingCompany, LedgerVotingCompanyProposal } from '../../../ledger/voting/company';

export class VotingCompanyAddCommand extends ChaincodeTransportCommandAsync<IVotingCompanyAddDto, LedgerVotingCompany> {
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

    protected checkResponse(item: LedgerVotingCompany): LedgerVotingCompany {
        return TransformUtil.toClass(LedgerVotingCompany, item);
    }
}

export interface IVotingCompanyAddDto {
    companyUid: string;
    type: LedgerCompanyRegulationType;
    proposal: ILedgerVotingCompanyProposal;
}

export class VotingCompanyAddDto implements IVotingCompanyAddDto {
    @Matches(LedgerCompany.UID_REG_EXP)
    companyUid: string;

    @IsString()
    type: LedgerCompanyRegulationType;

    @IsDefined()
    @Type(() => LedgerVotingCompanyProposal)
    @ValidateNested()
    proposal: LedgerVotingCompanyProposal;
}
