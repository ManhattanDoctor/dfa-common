import { getUid, UID } from '@ts-core/common';
import { Error as BaseError } from '@hlf-core/common';
import * as _ from 'lodash';

export class HlfError<D = any> extends BaseError<ErrorCode, D> {
    constructor(code: ErrorCode, message: string = '', details?: D) {
        super(code, message, details);
    }
}

// User
export class UserNotFoundError extends HlfError<void> {
    constructor(item: UID) {
        super(ErrorCode.USER_NOT_FOUND, `Unable to find "${getUid(item)}" user`)
    }
}
export class UserAlreadyExistsError extends HlfError<void> {
    constructor(item: UID) {
        super(ErrorCode.USER_ALREADY_EXISTS, `User "${getUid(item)}" already exists`)
    }
}
export class UserStatusForbiddenError extends HlfError<IUserStatusForbiddenErrorDetails> {
    constructor(item: UID, details: IUserStatusForbiddenErrorDetails) {
        super(ErrorCode.USER_STATUS_FORBIDDEN, `User "${getUid(item)}" status forbidden`, details)
    }
}
export class UserCryptoKeyInvalidError extends HlfError<void> {
    constructor(item: UID) {
        super(ErrorCode.USER_CRYPTO_KEY_INVALID, `User "${getUid(item)}" has invalid crypto key`)
    }
}
export class UserCryptoKeyNotFoundError extends HlfError<void> {
    constructor(item: UID) {
        super(ErrorCode.USER_CRYPTO_KEY_NOT_FOUND, `Unable to find "${getUid(item)}" user crypto key`)
    }
}

export interface IUserStatusForbiddenErrorDetails {
    has: string;
    required: string;
}

export enum ErrorCode {
    USER_NOT_FOUND = 'HLF_USER_NOT_FOUND',
    USER_ALREADY_EXISTS = 'HLF_USER_ALREADY_EXISTS',
    USER_STATUS_FORBIDDEN = 'HLF_USER_STATUS_FORBIDDEN',

    USER_CRYPTO_KEY_INVALID = 'HLF_USER_CRYPTO_KEY_INVALID',
    USER_CRYPTO_KEY_NOT_FOUND = 'HLF_USER_CRYPTO_KEY_NOT_FOUND',
}
