import * as _ from 'lodash';
import { IsString, Length, IsNumber, MaxLength, Matches } from 'class-validator';
import { LedgerCoinId } from '../coin';
import { RegExpUtil, ValidateUtil } from '../../util';

export interface ILedgerProjectPurpose {
    name: string;
    amount: string;
    coinId: LedgerCoinId;
}

export class LedgerProjectPurpose implements ILedgerProjectPurpose {
    @Length(ValidateUtil.PROJECT_PURPOSES_NAME_MIN_LENGTH, ValidateUtil.PROJECT_PURPOSES_NAME_MAX_LENGTH)
    @Matches(RegExpUtil.DESCRIPTION_REG_EXP)
    name: string;

    @MaxLength(ValidateUtil.DESCRIPTION_MAX_LENGTH)
    amount: string;

    @IsString()
    coinId: LedgerCoinId;
}