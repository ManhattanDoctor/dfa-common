import { IsDate, Length, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import * as _ from 'lodash';

export const COMPANY_DETAILS_INN_MIN_LENGTH = 10;
export const COMPANY_DETAILS_INN_MAX_LENGTH = 12;

export class CompanyTaxDetails {
    @Length(COMPANY_DETAILS_INN_MIN_LENGTH, COMPANY_DETAILS_INN_MAX_LENGTH)
    public inn: string;

    @IsDate()
    @Type(() => Date)
    public founded: Date;

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    public closed?: Date;
    /*
    public ceo: string;
    public kpp: string;
    public ogrn: string;
    public name: string;
    public address: string;
    */
}