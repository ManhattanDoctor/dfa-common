import { LedgerEvent } from '../LedgerEvent';
import { ILedgerVotingEventDto, LedgerVotingEvent } from '../LedgerVotingEvent';

export class CoinHoldedEvent extends LedgerVotingEvent {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.COIN_HOLDED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ILedgerVotingEventDto) {
        super(CoinHoldedEvent.NAME, data);
    }
}
