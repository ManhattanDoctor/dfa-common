import { IsString, Length, IsOptional } from 'class-validator';

export interface ILedgerPaymentDetails {
    description?: string;
}

export class LedgerPaymentDetails implements ILedgerPaymentDetails {
    @IsOptional()
    @Length(0, 250)
    @IsString()
    description?: string;
}
