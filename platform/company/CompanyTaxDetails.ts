import { IsDate, Length, IsOptional, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';
import * as _ from 'lodash';

export const COMPANY_DETAILS_INN_MIN_LENGTH = 10;
export const COMPANY_DETAILS_INN_MAX_LENGTH = 12;

export const COMPANY_TAX_DETAILS_NAME_MIN_LENGTH = 4;
export const COMPANY_TAX_DETAILS_NAME_MAX_LENGTH = 128;

export const COMPANY_TAX_DETAILS_CEO_MAX_LENGTH = 128;
export const COMPANY_TAX_DETAILS_KPP_MAX_LENGTH = 128;
export const COMPANY_TAX_DETAILS_OGRN_MAX_LENGTH = 32;
export const COMPANY_TAX_DETAILS_ADDRESS_MAX_LENGTH = 256;

export class CompanyTaxDetails {
    @Length(COMPANY_DETAILS_INN_MIN_LENGTH, COMPANY_DETAILS_INN_MAX_LENGTH)
    public inn: string;

    @Length(COMPANY_TAX_DETAILS_NAME_MIN_LENGTH, COMPANY_TAX_DETAILS_NAME_MAX_LENGTH)
    public name: string;

    @IsDate()
    @Type(() => Date)
    public founded: Date;

    @IsOptional()
    @MaxLength(COMPANY_TAX_DETAILS_CEO_MAX_LENGTH)
    public ceo?: string;

    @IsOptional()
    @MaxLength(COMPANY_TAX_DETAILS_KPP_MAX_LENGTH)
    public kpp?: string;

    @IsOptional()
    @MaxLength(COMPANY_TAX_DETAILS_OGRN_MAX_LENGTH)
    public ogrn?: string;

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    public closed?: Date;

    @IsOptional()
    @MaxLength(COMPANY_TAX_DETAILS_ADDRESS_MAX_LENGTH)
    public address?: string;
}

