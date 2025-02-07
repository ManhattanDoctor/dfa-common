import { Type } from 'class-transformer';
import * as _ from 'lodash';

export class CompanyTaxDetails {
    public ceo: string;
    public inn: string;
    public kpp: string;
    public ogrn: string;
    public name: string;
    public address: string;

    @Type(() => Date)
    public founded: Date;
}