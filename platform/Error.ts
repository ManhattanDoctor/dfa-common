import { ExtendedError } from '@ts-core/common';
import { CompanyStatus } from './company';
import { UserStatus } from './user';
import * as _ from 'lodash';

class Error<D = void> extends ExtendedError<D, ErrorCode> {
    constructor(code: ErrorCode, details?: D, public status?: number) {
        super(code, code, details);
    }
}

// Hlf
export class HlfUidUndefinedError extends Error {
    constructor() {
        super(ErrorCode.HLF_UID_UNDEFINED);
    }
}
export class HlfUidNotFoundError extends Error<string> {
    constructor(id: string) {
        super(ErrorCode.HLF_UID_NOT_FOUND, id);
    }
}
// User
export class UserUndefinedError extends Error {
    constructor() {
        super(ErrorCode.USER_UNDEFINED);
    }
}
export class UserNotFoundError extends Error<string> {
    constructor(id: string) {
        super(ErrorCode.USER_NOT_FOUND, id);
    }
}
export class UserStatusInvalidError extends Error<IInvalidValue<UserStatus>> {
    constructor(details: IInvalidValue<UserStatus>) {
        super(ErrorCode.USER_STATUS_INVALID, details);
    }
}
// Company
export class CompanyUndefinedError extends Error {
    constructor() {
        super(ErrorCode.COMPANY_UNDEFINED);
    }
}
export class CompanyNotFoundError extends Error<number> {
    constructor(id: number) {
        super(ErrorCode.COMPANY_NOT_FOUND, id);
    }
}
export class CompanyStatusInvalidError extends Error<IInvalidValue<CompanyStatus>> {
    constructor(details: IInvalidValue<CompanyStatus>) {
        super(ErrorCode.COMPANY_STATUS_INVALID, details);
    }
}
export class CompanyTaxDetailsNotFoundError extends Error<string> {
    constructor(query: string) {
        super(ErrorCode.COMPANY_TAX_DETAILS_NOT_FOUND, query);
    }
}

interface IInvalidValue<T = any> {
    name?: string;
    value: T | Array<T>;
    expected?: T | Array<T>;
}

export enum ErrorCode {
    // Hlf
    HLF_UID_UNDEFINED = 'PLATFORM_HLF_UID_UNDEFINED',
    HLF_UID_NOT_FOUND = 'PLATFORM_HLF_UID_NOT_FOUND',
    // User
    USER_UNDEFINED = 'PLATFORM_USER_UNDEFINED',
    USER_NOT_FOUND = 'PLATFORM_USER_NOT_FOUND',
    USER_STATUS_INVALID = 'PLATFORM_USER_STATUS_INVALID',
    // Company
    COMPANY_UNDEFINED = 'PLATFORM_COMPANY_UNDEFINED',
    COMPANY_NOT_FOUND = 'PLATFORM_COMPANY_NOT_FOUND',
    COMPANY_STATUS_INVALID = 'PLATFORM_COMPANY_STATUS_INVALID',
    COMPANY_TAX_DETAILS_NOT_FOUND = 'PLATFORM_COMPANY_TAX_DETAILS_NOT_FOUND',
}
