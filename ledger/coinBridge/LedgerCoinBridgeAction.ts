import { IsDate, IsInt, IsEnum, IsString, Matches, IsNumberString } from 'class-validator';
import * as _ from 'lodash';
import { LedgerCoin } from '../coin/LedgerCoin';

export enum LedgerCoinBridgeActionType {
    DEPOSIT = 'DEPOSIT',
    WITHDRAWAL = 'WITHDRAWAL',
}

export class LedgerCoinBridgeAction {
    @IsEnum(LedgerCoinBridgeActionType)
    public type: LedgerCoinBridgeActionType;

    @IsInt()
    public decimals: number;

    @IsString()
    public objectUid: string;

    @Matches(LedgerCoin.UID_REG_EXP)
    public coinUid: string;

    @IsNumberString()
    public amount: string;

    @IsString()
    public target: string;

    @IsString()
    public transactionHash: string;
}
