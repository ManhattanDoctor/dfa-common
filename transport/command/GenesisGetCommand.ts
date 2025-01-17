import { LedgerCommand, ChaincodeTransportCommandAsync } from './LedgerCommand';
import { TransformUtil } from '@ts-core/common';

export class GenesisGetCommand extends ChaincodeTransportCommandAsync<void, IGenesis> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.GENESIS_GET;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor() {
        super(GenesisGetCommand.NAME, null, null, true);
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: IGenesis): IGenesis {
        return TransformUtil.toClass(Genesis, item);
    }
}