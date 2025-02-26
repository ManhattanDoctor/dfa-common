import { TransportEvent } from "@ts-core/common";
import { Coin } from "../coin";

export class CoinAddedEvent extends TransportEvent<Coin> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = 'CoinAddedEvent';

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: Coin) {
        super(CoinAddedEvent.NAME, data);
    }
}
