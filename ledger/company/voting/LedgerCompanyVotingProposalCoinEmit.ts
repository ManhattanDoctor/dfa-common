import { IsString, Min, IsNumberString } from 'class-validator';
import { LedgerCompanyVotingProposal } from "./LedgerCompanyVotingProposal";

export class LedgerCompanyVotingProposalCoinEmit extends LedgerCompanyVotingProposal {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsString()
    public to: string;

    @IsString()
    public coinId: string;

    @IsNumberString()
    public amount: string;
}