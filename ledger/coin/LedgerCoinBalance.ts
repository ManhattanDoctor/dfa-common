import { IsNumberString } from 'class-validator';
import { LedgerCoinAccount } from './LedgerCoinAccount';
import * as _ from 'lodash';
import { MathUtil, UID } from '@ts-core/common';

export class LedgerCoinBalance extends LedgerCoinAccount {
    // --------------------------------------------------------------------------
    //
    //  Public Static Methods
    //
    // --------------------------------------------------------------------------

    public static create(coin: UID): LedgerCoinBalance {
        let item = new LedgerCoinBalance();
        item.emitted = item.burned = item.held = item.inUse = '0';
        return item;
    }

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

    public getAvailable(): string {
        return MathUtil.subtract(this.emitted, this.burned);
    }
}
