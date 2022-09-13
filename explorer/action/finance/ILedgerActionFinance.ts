import * as _ from 'lodash';
import { LedgerActionType } from '../ILedgerAction';

export class ILedgerActionFinance {
    uid: string;
    date: Date;
    type: LedgerActionType;
    transactionUid: string;

    toUid?: string;
    fromUid?: string;
    objectUid?: string;
    initiatorUid?: string;

    amount: string;
    isSucceed: boolean;
}
