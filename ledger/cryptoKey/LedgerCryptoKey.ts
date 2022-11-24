import { IsString } from 'class-validator';

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
