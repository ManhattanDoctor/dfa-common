import { LedgerVoting } from "../../voting/LedgerVoting";
import { Type, Transform } from 'class-transformer';
import { LedgerCompanyRegulationType } from "../../company/LedgerCompanyRegulation";
import { ValidateNested, IsString, Matches, IsDefined } from 'class-validator';
import { ILedgerVotingCompanyProposal, LedgerVotingCompanyProposal } from "./LedgerVotingCompanyProposal";
import { LedgerVotingCompanyFactory } from "./LedgerVotingCompanyFactory";
import { LedgerCompany } from "../../company/LedgerCompany";

export class LedgerVotingCompany<V = ILedgerVotingCompanyProposal> extends LedgerVoting<LedgerCompanyRegulationType, V> {
    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static create(createdDate: Date, transactionHash: string): LedgerVotingCompany {
        let item = new LedgerVotingCompany();
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

    @IsString()
    public type: LedgerCompanyRegulationType;

    @Type(() => LedgerVotingCompanyProposal)
    @Transform(item => LedgerVotingCompanyFactory.transformProposal(item.value), { toClassOnly: true })
    @IsDefined()
    @ValidateNested()
    public proposal: V;
}
