import { IsOptional, IsString } from 'class-validator';

export interface ICoinSeries {
    uid: string;
    index?: string;
}

export class CoinSeries implements ICoinSeries {
    @IsString()
    public uid: string;

    @IsOptional()
    @IsString()
    public index?: string;
}