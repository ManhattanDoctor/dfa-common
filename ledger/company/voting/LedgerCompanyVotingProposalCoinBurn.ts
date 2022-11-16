import { IsString, IsNumberString } from 'class-validator';
import { LedgerCompanyVotingProposal } from "./LedgerCompanyVotingProposal";

export class LedgerCompanyVotingProposalCoinBurn extends LedgerCompanyVotingProposal {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsString()
    public from: string;

    @IsString()
    public coinId: string;

    @IsNumberString()
    public amount: string;
}