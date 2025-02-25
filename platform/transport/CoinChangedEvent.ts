import { TransportEvent } from "@ts-core/common";
import { Coin } from "../coin";

export class CoinChangedEvent extends TransportEvent<Coin>{
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = 'CoinChangedEvent';

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: Coin) {
        super(CoinChangedEvent.NAME, data);
    }
}
