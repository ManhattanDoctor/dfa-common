
import * as _ from 'lodash';
import { LedgerVotingStatus } from '../../ledger/voting';
import { VotingCompany } from '../voting/company';

export class VotingUtil {
    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static getRoom(id: number): string {
        return `voting${id}`;
    }
    
    public static isCanVote(item: VotingCompany): boolean {
        return item.status === LedgerVotingStatus.IN_PROGRESS;
    }
}
