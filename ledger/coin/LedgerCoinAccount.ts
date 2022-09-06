import { MathUtil } from '@ts-core/common';
import { IsNumberString } from 'class-validator';
import * as _ from 'lodash';
import { LedgerError, LedgerErrorCode } from '../error/LedgerError';

export class LedgerCoinAccount {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsNumberString()
    public held: string;

    @IsNumberString()
    public inUse: string;

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public hold(amount: string): void {
        if (MathUtil.lessThanOrEqualTo(amount, '0')) {
            throw new LedgerError(LedgerErrorCode.BAD_REQUEST, `Holding amount must be granter than zero`);
        }
        if (MathUtil.lessThan(amount, this.inUse)) {
            throw new LedgerError(LedgerErrorCode.BAD_REQUEST, `Coin account "inUse" balance less than holding amount`);
        }

        this.held = MathUtil.add(this.held, amount);
        this.inUse = MathUtil.subtract(this.inUse, amount);
    }

    public unhold(amount: string): void {
        if (MathUtil.lessThanOrEqualTo(amount, '0')) {
            throw new LedgerError(LedgerErrorCode.BAD_REQUEST, `Unholding amount must be granter than zero`);
        }
        if (MathUtil.lessThan(amount, this.held)) {
            throw new LedgerError(LedgerErrorCode.BAD_REQUEST, `Coin account "held" balance less than unholding amount`);
        }
        this.inUse = MathUtil.add(this.inUse, amount);
        this.held = MathUtil.subtract(this.held, amount);
    }

    // --------------------------------------------------------------------------
    //
    //  Public Properties
    //
    // --------------------------------------------------------------------------

    public get total(): string {
        return MathUtil.add(this.held, this.inUse);
    }
}
