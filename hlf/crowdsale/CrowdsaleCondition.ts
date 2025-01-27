import { IsNumberString, IsEnum, IsDefined, ValidateNested, IsDate, Matches, IsOptional, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { CoinAmount, ICoinAmount } from '@hlf-core/coin';

export class CrowdsaleCondition extends CoinAmount implements ICrowdsaleCondition {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsNumberString()
    public rate: string;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    public opening?: Date;
    
    @IsOptional()
    @IsNumber()
    public duration?: number;
}

export interface ICrowdsaleCondition extends ICoinAmount {
    rate: string;
    opening?: Date;
}