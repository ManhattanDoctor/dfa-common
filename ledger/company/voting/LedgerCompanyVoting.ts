import { LedgerVoting, LedgerVotingStepType } from "../../voting";
import { Type } from 'class-transformer';
import { LedgerCompanyRegulationType } from "../LedgerCompanyRegulation";
import { ValidateNested, IsEnum, Matches, IsDefined } from 'class-validator';
import { LedgerCompanyVotingProposal } from "./LedgerCompanyVotingProposal";
import { LedgerCompanyVotingProposalCoinEmit } from "./LedgerCompanyVotingProposalCoinEmit";
import { LedgerCompany } from "../LedgerCompany";

export class LedgerCompanyVoting extends LedgerVoting<LedgerCompanyRegulationType, LedgerCompanyVotingProposal> {
    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static create(createdDate: Date, transactionHash: string): LedgerCompanyVoting {
        let item = new LedgerCompanyVoting();
        item.uid = LedgerVoting.createUid(createdDate, transactionHash);
        item.createdDate = createdDate;
        return item;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(LedgerCompany.UID_REG_EXP)
    public companyUid: string;

    @IsEnum(LedgerCompanyRegulationType)
    public type: LedgerCompanyRegulationType;

    @Type(() => LedgerCompanyVotingProposal, {
        discriminator: {
            property: 'type',
            subTypes: [
                { name: LedgerCompanyRegulationType.COIN_EMIT, value: LedgerCompanyVotingProposalCoinEmit },
            ]
        },
        keepDiscriminatorProperty: true,
    })
    @IsDefined()
    @ValidateNested()
    public proposal: LedgerCompanyVotingProposal;
}
