import { TransportEvent } from "@ts-core/common";

export class CoinRemovedEvent extends TransportEvent<number> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = 'CoinRemovedEvent';

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: number) {
        super(CoinRemovedEvent.NAME, data);
    }
}
