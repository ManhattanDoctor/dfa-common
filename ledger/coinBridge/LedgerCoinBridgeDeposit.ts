import { DateUtil } from '@ts-core/common';
import { IsDate, IsString, Matches, IsNumberString } from 'class-validator';
import * as _ from 'lodash';
import { LedgerCoin } from '../coin/LedgerCoin';
import { LedgerUser } from '../user';

export class LedgerCoinBridgeDeposit {

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(LedgerUser.UID_REG_EXP)
    public userUid: string;

    @Matches(LedgerCoin.UID_REG_EXP)
    public coinUid: string;

    @IsNumberString()
    public amount: string;

    @IsDate()
    public date: Date;

    @IsString()
    public address: string;

    @IsString()
    public transactionHash: string;
}
