import { IsString, IsEnum, IsInt, IsNumberString } from 'class-validator';
import { LedgerVotingCompanyProposal, LedgerVotingCompanyProposalType } from "./LedgerVotingCompanyProposal";

export enum LedgerVotingCompanyProposalCoinAction {
    EMIT = 'EMIT',
    BURN = 'BURN'
}

export class LedgerVotingCompanyProposalCoinEdit extends LedgerVotingCompanyProposal {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsString()
    public objectUid: string;

    @IsString()
    public coinId: string;

    @IsInt()
    public decimals: number;

    @IsNumberString()
    public amount: string;

    @IsEnum(LedgerVotingCompanyProposalCoinAction)
    public action: LedgerVotingCompanyProposalCoinAction;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor() {
        super();
        this.type = LedgerVotingCompanyProposalType.COIN_EDIT;
    }
}

