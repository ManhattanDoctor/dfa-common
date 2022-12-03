import { IsNumberString } from 'class-validator';
import { LedgerCoinAccount } from './LedgerCoinAccount';
import * as _ from 'lodash';
import { MathUtil } from '@ts-core/common';

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

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public emit(amount: string): void {
        super.emit(amount);
        this.emitted = MathUtil.add(this.emitted, amount);
    }

    public burn(amount: string): void {
        super.burn(amount);
        this.burned = MathUtil.add(this.burned, amount);
    }
}
