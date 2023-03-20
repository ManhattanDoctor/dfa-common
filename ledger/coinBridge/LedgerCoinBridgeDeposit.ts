import { IsDate, IsInt, IsString, Matches, IsNumberString } from 'class-validator';
import * as _ from 'lodash';
import { LedgerCoin } from '../coin/LedgerCoin';
import { LedgerUser } from '../user';

export class LedgerCoinBridgeDeposit {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsString()
    public name: string;

    @IsInt()
    public decimals: number;

    @IsString()
    public objectUid: string;

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
