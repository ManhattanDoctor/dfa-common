import { getUid, MathUtil, UID } from '@ts-core/common';
import { IsString, IsOptional, IsNumberString } from 'class-validator';
import * as _ from 'lodash';
import { LedgerError, LedgerErrorCode } from '../error/LedgerError';
import { LedgerCoin } from './LedgerCoin';

export class LedgerCoinAccount {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static PREFIX = `→coin~account`;

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static create(coin: UID, object: UID): LedgerCoinAccount {
        let item = new LedgerCoinAccount();
        item.uid = LedgerCoinAccount.createUid(coin, object);
        item.held = item.inUse = '0';
        item.objectUid = getUid(object);
        return item;
    }

    public static createUid(coin: UID, object?: UID): string {
        let item = `${LedgerCoinAccount.PREFIX}:${getUid(coin)}`;
        return !_.isNil(object) ? `${item}~${getUid(object)}` : item;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsString()
    public uid: string;

    @IsString()
    public objectUid: string;

    @IsNumberString()
    public held: string;

    @IsNumberString()
    public inUse: string;

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public emit(amount: string): void {
        if (MathUtil.lessThanOrEqualTo(amount, '0')) {
            throw new LedgerError(LedgerErrorCode.BAD_REQUEST, `Emitting amount must be granter than zero`);
        }
        this.inUse = MathUtil.add(this.inUse, amount);
    }

    public burn(amount: string): void {
        if (MathUtil.lessThanOrEqualTo(amount, '0')) {
            throw new LedgerError(LedgerErrorCode.BAD_REQUEST, `Burning amount must be granter than zero`);
        }
        if (MathUtil.greaterThan(amount, this.inUse)) {
            throw new LedgerError(LedgerErrorCode.BAD_REQUEST, `Burning amount must be less than "isUse" balance`);
        }
        this.inUse = MathUtil.subtract(this.inUse, amount);
    }

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

    public getTotal(): string {
        return MathUtil.add(this.held, this.inUse);
    }

    public isEmpty(): boolean {
        return (_.isNil(this.inUse) || this.inUse === '0') && (_.isNil(this.held) || this.held === '0');
    }
}
