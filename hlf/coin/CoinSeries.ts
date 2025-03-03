import { IsOptional, IsNumber, Length, Matches } from 'class-validator';
import { CoinUtil } from './CoinUtil';

export interface ICoinSeries {
    uid: string;
    index?: number;
}

export class CoinSeries implements ICoinSeries {
    @Matches(CoinUtil.SERIES_UID_PATTERN)
    @Length(CoinUtil.SERIES_UID_MIN_LENGTH, CoinUtil.SERIES_UID_MAX_LENGTH)
    public uid: string;

    @IsOptional()
    @IsNumber()
    public index?: number;
}