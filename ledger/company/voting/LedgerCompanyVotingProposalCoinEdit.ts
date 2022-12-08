import { IsString, IsEnum, IsNumberString } from 'class-validator';
import { LedgerCompanyVotingProposal, LedgerCompanyVotingProposalType } from "./LedgerCompanyVotingProposal";

export enum LedgerCompanyVotingProposalCoinAction {
    EMIT = 'EMIT',
    BURN = 'BURN'
}

export class LedgerCompanyVotingProposalCoinEdit extends LedgerCompanyVotingProposal {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsString()
    public objectUid: string;

    @IsString()
    public coinId: string;

    @IsNumberString()
    public amount: string;

    @IsEnum(LedgerCompanyVotingProposalCoinAction)
    public action: LedgerCompanyVotingProposalCoinAction;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor() {
        super();
        this.type = LedgerCompanyVotingProposalType.COIN_EDIT;
    }
}

