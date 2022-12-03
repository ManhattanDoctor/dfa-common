import { Min, IsInt, IsNumberString } from 'class-validator';
import * as _ from 'lodash';

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
