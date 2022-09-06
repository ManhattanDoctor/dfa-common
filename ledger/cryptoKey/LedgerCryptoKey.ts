import { IsEnum, IsString } from 'class-validator';
import { IUIDable } from '@ts-core/common';

export class LedgerCryptoKey {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static PREFIX = 'cryptoKey';

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsString()
    value: string;

    @IsString()
    algorithm: string;
}
