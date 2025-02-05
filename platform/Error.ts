import { getUid, UID, ExtendedError } from '@ts-core/common';
import * as _ from 'lodash';

class Error<C, D = any> extends ExtendedError<D, C | ErrorCode> {
    constructor(code: C | ErrorCode, message: string = '', details?: D) {
        super(message, code, details);
    }
}

// User
export class UserNotFoundError extends Error<void> {
    constructor(item: UID) {
        super(ErrorCode.USER_NOT_FOUND, `Unable to find "${getUid(item)}" user`)
    }
}
export class UserStatusForbiddenError extends Error<IUserStatusForbiddenErrorDetails> {
    constructor(item: UID, details: IUserStatusForbiddenErrorDetails) {
        super(ErrorCode.USER_STATUS_FORBIDDEN, `User "${getUid(item)}" status forbidden`, details)
    }
}
export interface IUserStatusForbiddenErrorDetails {
    has: string;
    required: string;
}

export enum ErrorCode {
    // User
    USER_NOT_FOUND = 'PLATFORM_USER_NOT_FOUND',
    USER_STATUS_FORBIDDEN = 'PLATFORM_USER_STATUS_FORBIDDEN',
}
