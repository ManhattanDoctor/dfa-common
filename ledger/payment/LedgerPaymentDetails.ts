import { LedgerVoting } from '@project/common/ledger/voting';
import { IsString, Matches, Length, IsOptional } from 'class-validator';

export interface ILedgerPaymentDetails {
    votingUid: string;
    description?: string;
}

export class LedgerPaymentDetails implements ILedgerPaymentDetails {
    @Matches(LedgerVoting.UID_REG_EXP)
    votingUid: string;

    @IsOptional()
    @Length(0, 250)
    @IsString()
    description?: string;
}
