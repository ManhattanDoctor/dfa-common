import { getUid, UID, ExtendedError } from '@ts-core/common';
import * as _ from 'lodash';

class Error<C, D = any> extends ExtendedError<D, C | ErrorCode> {
    constructor(code: C | ErrorCode, message: string = '', details?: D) {
        super(message, code, details);
    }
}

// Hlf
export class HlfUidUndefinedError extends Error<void> {
    constructor() {
        super(ErrorCode.COMPANY_NOT_FOUND, `Hlf uid is undefined`);
    }
}
// User
export class UserNotFoundError extends Error<void> {
    constructor() {
        super(ErrorCode.USER_NOT_FOUND, `Unable to find user`);
    }
}
export class UserStatusForbiddenError extends Error<void> {
    constructor(item: UID) {
        super(ErrorCode.USER_STATUS_FORBIDDEN, `User "${getUid(item)}" status forbidden`);
    }
}
// Company
export class CompanyNotFoundError extends Error<void> {
    constructor() {
        super(ErrorCode.COMPANY_NOT_FOUND, `Unable to find company`);
    }
}
export class CompanyStatusForbiddenError extends Error<void> {
    constructor(item: UID) {
        super(ErrorCode.COMPANY_STATUS_FORBIDDEN, `Company "${getUid(item)}" status forbidden`);
    }
}


export enum ErrorCode {
    // Hlf
    HLF_UID_UNDEFINED = 'PLATFORM_HLF_UID_UNDEFINED',
    // User
    USER_NOT_FOUND = 'PLATFORM_USER_NOT_FOUND',
    USER_STATUS_FORBIDDEN = 'PLATFORM_USER_STATUS_FORBIDDEN',
    // Company
    COMPANY_NOT_FOUND = 'PLATFORM_COMPANY_NOT_FOUND',
    COMPANY_STATUS_FORBIDDEN = 'PLATFORM_COMPANY_STATUS_FORBIDDEN',
}
