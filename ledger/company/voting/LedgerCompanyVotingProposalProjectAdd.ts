import { IsString, Matches, IsNumberString, IsArray, ValidateNested, ArrayMaxSize, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';
import { LedgerCompanyVotingProposal } from "./LedgerCompanyVotingProposal";
import { RegExpUtil } from '@project/common/util';
import { LedgerUser } from '../../user/LedgerUser';
import { ValidateUtil } from '../../../util';
import { LedgerProjectPurpose } from '../../project';

export class LedgerCompanyVotingProposalProjectAdd extends LedgerCompanyVotingProposal {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(LedgerUser.UID_REG_EXP)
    public ownerUid: string;

    @Matches(RegExpUtil.DESCRIPTION_REG_EXP)
    public description: string;

    @IsArray()
    @ArrayMinSize(ValidateUtil.PROJECT_PURPOSES_MIN_LENGTH)
    @ArrayMaxSize(ValidateUtil.PROJECT_PURPOSES_MAX_LENGTH)
    @Type(() => LedgerProjectPurpose)
    @ValidateNested({ each: true })
    public purposes: Array<LedgerProjectPurpose>;

    @IsString()
    public coinId: string;

    @IsNumberString()
    public amount: string;

}
