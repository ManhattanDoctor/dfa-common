import { TransformUtil } from '@ts-core/common';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerCoinBridge } from '../../../ledger/coinBridge';
import { CoinBridgeGetDto, ICoinBridgeGetDto } from './CoinBridgeGetCommand';

export class CoinBridgeCheckCommand extends ChaincodeTransportCommandAsync<ICoinBridgeGetDto, LedgerCoinBridge> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COIN_BRIDGE_CHECK;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinBridgeGetDto) {
        super(CoinBridgeCheckCommand.NAME, TransformUtil.toClass(CoinBridgeGetDto, request));
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: LedgerCoinBridge): LedgerCoinBridge {
        return TransformUtil.toClass(LedgerCoinBridge, item);
    }
}