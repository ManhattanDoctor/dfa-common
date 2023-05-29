import { ExtendedError, getUid, UID } from '@ts-core/common';

export class LedgerError<T = any> extends ExtendedError<T> {
    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(code: LedgerErrorCode, message: string = '', details?: T) {
        super(message, code, details);
    }
}

export class LedgerObjectNotFoundError extends LedgerError {
    constructor(item: UID) {
        super(LedgerErrorCode.NOT_FOUND, `Ledger object "${getUid(item)}" is nil`)
    }
}
export class LedgerForbiddenError extends LedgerError {
    constructor(message: string) {
        super(LedgerErrorCode.FORBIDDEN, message)
    }
}
export class LedgerBadRequestError extends LedgerError {
    constructor(message: string, details?: any) {
        super(LedgerErrorCode.BAD_REQUEST, message, details)
    }
}

export enum LedgerErrorCode {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404
}
