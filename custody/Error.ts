import { getUid, UID, ExtendedError } from '@ts-core/common';
import * as _ from 'lodash';

class Error<C, D = any> extends ExtendedError<D, C | ErrorCode> {
    constructor(code: C | ErrorCode, message: string = '', details?: D, public status: number = ExtendedError.HTTP_CODE_BAD_REQUEST) {
        super(message, code, details);
    }
}


export class KeyNotFoundError extends Error<void> {
    constructor() {
        super(ErrorCode.KEY_NOT_FOUND, `Unable to find key`)
    }
}
export class KeyForbiddenError extends Error<void> {
    constructor() {
        super(ErrorCode.KEY_FORBIDDEN, `Key forbidden`, null, ExtendedError.HTTP_CODE_FORBIDDEN)
    }
}

export enum ErrorCode {
    KEY_NOT_FOUND = 'KEY_NOT_FOUND',
    KEY_FORBIDDEN = 'KEY_FORBIDDEN',
}
