import { TransformUtil } from '@ts-core/common';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { CoinHoldDto, ICoinHoldDto } from './CoinHoldCommand';

export class CoinUnholdCommand extends ChaincodeTransportCommandAsync<ICoinHoldDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COIN_UNHOLD;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinHoldDto) {
        super(CoinUnholdCommand.NAME, TransformUtil.toClass(CoinHoldDto, request));
    }
}