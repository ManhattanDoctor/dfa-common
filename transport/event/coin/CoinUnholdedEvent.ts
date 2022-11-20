import { LedgerEvent } from '../LedgerEvent';
import { ILedgerVotingEventDto, LedgerVotingEvent } from '../LedgerVotingEvent';

export class CoinUnholdedEvent extends LedgerVotingEvent {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.COIN_UNHOLDED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ILedgerVotingEventDto) {
        super(CoinUnholdedEvent.NAME, data);
    }
}
