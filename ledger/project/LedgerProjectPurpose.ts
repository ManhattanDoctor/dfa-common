import * as _ from 'lodash';
import { IsString, Length, IsNumberString, MaxLength, Matches } from 'class-validator';
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
    public name: string;

    @IsNumberString()
    public amount: string;

    @IsString()
    public coinId: LedgerCoinId;
}