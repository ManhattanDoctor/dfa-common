import { TransformUtil } from '@ts-core/common';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { ICoinEmitDto, CoinEmitDto } from './CoinEmitCommand';

export class CoinBurnCommand extends ChaincodeTransportCommandAsync<ICoinEmitDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COIN_BURN;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinEmitDto) {
        super(CoinBurnCommand.NAME, TransformUtil.toClass(CoinEmitDto, request));
    }
}
