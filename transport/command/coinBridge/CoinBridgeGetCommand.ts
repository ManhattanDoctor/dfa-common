import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { Matches } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerCoinBridge } from '../../../ledger/coinBridge';

export class CoinBridgeGetCommand extends ChaincodeTransportCommandAsync<ICoinBridgeGetDto, LedgerCoinBridge> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COIN_BRIDGE_GET;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinBridgeGetDto) {
        super(CoinBridgeGetCommand.NAME, TransformUtil.toClass(CoinBridgeGetCommand, request), null, true);
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

export interface ICoinBridgeGetDto extends ITraceable {
    name: string;
}

export class CoinBridgeGetDto implements ICoinBridgeGetDto {
    @Matches(LedgerCoinBridge.NAME_REG_EXP)
    name: string;
}
