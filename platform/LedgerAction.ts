import { Type } from 'class-transformer';
import * as _ from 'lodash';

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
}

export enum LedgerActionType {
    USER_ADDED = 'USER_ADDED',
    USER_CRYPTO_KEY_CHANGED = 'USER_CRYPTO_KEY_CHANGED',

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
}
