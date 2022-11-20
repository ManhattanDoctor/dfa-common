import { LedgerEvent } from '../LedgerEvent';
import { ILedgerVotingEventDto, LedgerVotingEvent } from '../LedgerVotingEvent';

export class CoinBurnedEvent extends LedgerVotingEvent {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerEvent.COIN_BURNED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ILedgerVotingEventDto) {
        super(CoinBurnedEvent.NAME, data);
    }
}
