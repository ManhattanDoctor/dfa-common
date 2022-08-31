import { IsNumberString, IsString } from 'class-validator';
import { LedgerCoinId } from '../coin';
import { IUIDable } from '@ts-core/common';

export class LedgerWalletAccount implements IUIDable {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static PREFIX = 'wallet-account';

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsString()
    uid: string

    @IsString()
    coinId: LedgerCoinId;

    @IsNumberString()
    value: string;
}
