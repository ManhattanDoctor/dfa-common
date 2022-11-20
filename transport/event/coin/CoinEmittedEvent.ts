import { LedgerEvent } from '../LedgerEvent';
import { ILedgerVotingEventDto, LedgerVotingEvent } from '../LedgerVotingEvent';

export class CoinEmittedEvent extends LedgerVotingEvent {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.COIN_EMITTED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ILedgerVotingEventDto) {
        super(CoinEmittedEvent.NAME, data);
    }
}
