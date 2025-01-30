import { TransformUtil, TransportEvent } from '@ts-core/common';
import { Event } from './Event';
import { Coin } from '../coin';

export class CoinAddedEvent extends TransportEvent<Coin> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = Event.COIN_ADDED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: Coin) {
        super(CoinAddedEvent.NAME, TransformUtil.toClass(Coin, data));
    }
}
