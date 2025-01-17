import { IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import * as _ from 'lodash';

export interface ISeed {
    created: Date;
}

export class Seed implements ISeed {
    @Type(() => Date)
    @IsDate()
    created: Date;
}
