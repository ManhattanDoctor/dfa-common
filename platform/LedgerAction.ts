import * as _ from 'lodash';
import { Type } from 'class-transformer';

export class LedgerAction {
    id: number;
    type: LedgerActionType;

    @Type(() => Date)
    date: Date;

    requestId: string;
    objectUid: string;
    initiatorUid: string;

    isExecuted: boolean;

    amount?: string;
    decimals?: number;
    
    userUid?: string;
    coinUid?: string;
    votingUid?: string;
    projectUid?: string;
    companyUid?: string;
}

export enum LedgerActionType {
    USER_ADDED = 'USER_ADDED',
    USER_CRYPTO_KEY_CHANGED = 'USER_CRYPTO_KEY_CHANGED',

    COMPANY_ADDED = 'COMPANY_ADDED',
    COMPANY_USER_ADDED = 'COMPANY_USER_ADDED',
    COMPANY_USER_EDITED = 'COMPANY_USER_EDITED',
    COMPANY_USER_REMOVED = 'COMPANY_USER_REMOVED',
    COMPANY_PROJECT_ADDED = 'COMPANY_PROJECT_ADDED',

    COIN_ADDED = 'COIN_ADDED',
    COIN_HOLDED = 'COIN_HOLDED',
    COIN_UNHOLDED = 'COIN_UNHOLDED',

    COIN_BURNED = 'COIN_BURNED',

    // Based on COIN_TRANSFERRED
    COIN_TRANSFER_SENT = 'COIN_TRANSFER_SENT',
    COIN_TRANSFER_RECEIVE = 'COIN_TRANSFER_RECEIVE',

    // Based on COIN_EMITTED
    COIN_EMITTED_SENT = 'COIN_EMITTED_SENT',
    COIN_EMITTED_RECEIVE = 'COIN_EMITTED_RECEIVE',

    VOTING_ADDED = 'VOTING_ADDED',
    VOTING_VOTED = 'VOTING_VOTED',

    PROJECT_ADDED = 'PROJECT_ADDED',
    PROJECT_EDITED = 'PROJECT_EDITED',
    PROJECT_REMOVED = 'PROJECT_REMOVED',
    PROJECT_USER_ADDED = 'PROJECT_USER_ADDED',
    PROJECT_USER_EDITED = 'PROJECT_USER_EDITED',
    PROJECT_USER_REMOVED = 'PROJECT_USER_REMOVED'
}
