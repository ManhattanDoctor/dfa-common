import { Min, Matches, IsInt, IsNumberString } from 'class-validator';
import * as _ from 'lodash';
import { LedgerCoin } from './LedgerCoin';
import { LedgerCoinId } from './LedgerCoinId';

export class LedgerCoinObjectBalance {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsNumberString()
    public held: string;

    @IsNumberString()
    public inUse: string;

    @IsNumberString()
    public total: string;

    @IsNumberString()
    public share: string;

    @Matches(LedgerCoin.COIN_ID_REG_EXP)
    public coinId: LedgerCoinId;

    @IsInt()
    @Min(0)
    public decimals: number;

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public isEmpty(): boolean {
        return _.isNil(this.total) || this.total === '0';
    }
}
