import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { ICoinPermission, CoinPermission } from './CoinPermission';
import { CoinSeries, ICoinSeries } from './CoinSeries';

export interface ICoinDetails {
    series?: ICoinSeries;
    permission?: ICoinPermission;
}

export class CoinDetails implements ICoinDetails {
    @IsOptional()
    @Type(() => CoinSeries)
    @ValidateNested()
    public series?: CoinSeries;

    @IsOptional()
    @Type(() => CoinPermission)
    @ValidateNested()
    public permission?: CoinPermission;
}