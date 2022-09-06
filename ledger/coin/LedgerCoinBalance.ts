import { IsNumberString } from 'class-validator';
import { LedgerCoinAccount } from './LedgerCoinAccount';
import * as _ from 'lodash';

export class LedgerCoinBalance extends LedgerCoinAccount {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsNumberString()
    public burned: string;

    @IsNumberString()
    public emitted: string;
}
