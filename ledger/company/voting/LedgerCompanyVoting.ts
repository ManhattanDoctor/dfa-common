import { LedgerVoting } from "../../voting/LedgerVoting";
import { Type } from 'class-transformer';
import { LedgerCompanyRegulationType } from "../LedgerCompanyRegulation";
import { ValidateNested, IsEnum, Matches, IsDefined } from 'class-validator';
import { ILedgerCompanyVotingProposal } from "./LedgerCompanyVotingProposal";
import { LedgerCompany } from "../LedgerCompany";
import { LedgerCompanyVotingFactory } from "./LedgerCompanyVotingFactory";

export class LedgerCompanyVoting<V = ILedgerCompanyVotingProposal> extends LedgerVoting<LedgerCompanyRegulationType, V> {
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

    @Type(item => LedgerCompanyVotingFactory.getProposalClass(item.object.type))
    @IsDefined()
    @ValidateNested()
    public proposal: V;
}
