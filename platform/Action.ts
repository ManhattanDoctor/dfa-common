import { Type } from 'class-transformer';
import * as _ from 'lodash';

export class Action {
    id: number;
    type: ActionType;
    objectUid: string;
    isExecuted: boolean;

    requestId: string;
    requestUserId: string;

    amount?: string;
    initiatorUid?: string;

    otcUid?: string;
    userUid?: string;
    coinUid?: string;

    @Type(() => Date)
    date: Date;
}

export enum ActionType {
    USER_ADDED = 'USER_ADDED',
    USER_EDITED = 'USER_EDITED',

    COIN_ADDED = 'COIN_ADDED',
    COIN_HOLDED = 'COIN_HOLDED',
    COIN_BURNED = 'COIN_BURNED',
    COIN_EMITTED = 'COIN_EMITTED',
    COIN_UNHOLDED = 'COIN_UNHOLDED',

    AUCTION_ADDED = 'AUCTION_ADDED',
    AUCTION_BIDED = 'AUCTION_BIDED',
    AUCTION_FINISHED = 'AUCTION_FINISHED',

    NICKNAME_ADDED = 'NICKNAME_ADDED',
    NICKNAME_ASSIGNED = 'NICKNAME_ASSIGNED',
    NICKNAME_OWNER_CHANGED = 'NICKNAME_OWNER_CHANGED',

    // Based on NICKNAME_TRANSFERRED
    NICKNAME_TRANSFER_SENT = 'NICKNAME_TRANSFER_SENT',
    NICKNAME_TRANSFER_RECEIVE = 'NICKNAME_TRANSFER_RECEIVE',

    // Based on COIN_TRANSFERRED
    COIN_TRANSFER_SENT = 'COIN_TRANSFER_SENT',
    COIN_TRANSFER_RECEIVE = 'COIN_TRANSFER_RECEIVE',
}