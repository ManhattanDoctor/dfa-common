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
        super(ErrorCode.HLF_UID_UNDEFINED, `Hlf uid is undefined`);
    }
}
// User
export class UserUndefinedError extends Error<string> {
    constructor() {
        super(ErrorCode.USER_UNDEFINED, 'User undefined');
    }
}
export class UserNotFoundError extends Error<string> {
    constructor(id: string) {
        super(ErrorCode.USER_NOT_FOUND, `Unable to find "${id}" user`);
    }
}
export class UserStatusForbiddenError extends Error<void> {
    constructor(item: UID) {
        super(ErrorCode.USER_STATUS_FORBIDDEN, `User "${getUid(item)}" status forbidden`);
    }
}
// Company
export class CompanyUndefinedError extends Error<string> {
    constructor() {
        super(ErrorCode.COMPANY_UNDEFINED, 'Company undefined');
    }
}
export class CompanyNotFoundError extends Error<void> {
    constructor(id: number | string) {
        super(ErrorCode.USER_NOT_FOUND, `Unable to find "${id}" user`);
    }
}
export class CompanyStatusForbiddenError extends Error<void> {
    constructor(item: UID) {
        super(ErrorCode.COMPANY_STATUS_FORBIDDEN, `Company "${getUid(item)}" status forbidden`);
    }
}
export class CompanyTaxDetailsNotFoundError extends Error<string> {
    constructor(query: string) {
        super(ErrorCode.COMPANY_TAX_DETAILS_NOT_FOUND, `Unable to find "${query}" company tax details`);
    }
}


export enum ErrorCode {
    // Hlf
    HLF_UID_UNDEFINED = 'PLATFORM_HLF_UID_UNDEFINED',
    // User
    USER_UNDEFINED = 'PLATFORM_USER_UNDEFINED',
    USER_NOT_FOUND = 'PLATFORM_USER_NOT_FOUND',
    USER_STATUS_FORBIDDEN = 'PLATFORM_USER_STATUS_FORBIDDEN',
    // Company
    COMPANY_UNDEFINED = 'PLATFORM_COMPANY_UNDEFINED',
    COMPANY_NOT_FOUND = 'PLATFORM_COMPANY_NOT_FOUND',
    COMPANY_STATUS_FORBIDDEN = 'PLATFORM_COMPANY_STATUS_FORBIDDEN',
    COMPANY_TAX_DETAILS_NOT_FOUND = 'PLATFORM_COMPANY_TAX_DETAILS_NOT_FOUND',
}
