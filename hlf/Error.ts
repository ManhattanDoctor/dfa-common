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
export class UserAlreadyExistsError extends Error<void> {
    constructor(item: UID) {
        super(ErrorCode.USER_ALREADY_EXISTS, `User "${getUid(item)}" already exists`)
    }
}
export class UserStatusForbiddenError extends Error<IUserStatusForbiddenErrorDetails> {
    constructor(item: UID, details: IUserStatusForbiddenErrorDetails) {
        super(ErrorCode.USER_STATUS_FORBIDDEN, `User "${getUid(item)}" status forbidden`, details)
    }
}
export class UserCryptoKeyInvalidError extends Error<void> {
    constructor(item: UID) {
        super(ErrorCode.USER_CRYPTO_KEY_INVALID, `User "${getUid(item)}" has invalid crypto key`)
    }
}
export class UserCryptoKeyNotFoundError extends Error<void> {
    constructor(item: UID) {
        super(ErrorCode.USER_CRYPTO_KEY_NOT_FOUND, `Unable to find "${getUid(item)}" user crypto key`)
    }
}
// Coin
export class CoinNotFoundError extends Error<void> {
    constructor(item: UID) {
        super(ErrorCode.COIN_NOT_FOUND, `Unable to find "${getUid(item)}" coin`);
    }
}
export class CoinObjectNotFoundError extends Error<void> {
    constructor(item: UID) {
        super(ErrorCode.COIN_OBJECT_NOT_FOUND, `Unable to find "${getUid(item)}" coin object`);
    }
}
export class CoinAlreadyExistsError extends Error<void> {
    constructor(item: UID) {
        super(ErrorCode.COIN_ALREADY_EXISTS, `Coin "${getUid(item)}" already exists`);
    }
}
export class CoinWhitelistForbiddenError extends Error<void> {
    constructor(item: UID) {
        super(ErrorCode.COIN_WHITELIST_FORBIDDEN, `"${getUid(item)}" must be in the whitelist`);
    }
}
export class CoinBlacklistForbiddenError extends Error<void> {
    constructor(item: UID) {
        super(ErrorCode.COIN_BLACKLIST_FORBIDDEN, `"${getUid(item)}" is in the blacklist`);
    }
}

export interface IUserStatusForbiddenErrorDetails {
    has: string;
    required: string;
}

export enum ErrorCode {
    // User
    USER_NOT_FOUND = 'HLF_USER_NOT_FOUND',
    USER_ALREADY_EXISTS = 'HLF_USER_ALREADY_EXISTS',
    USER_STATUS_FORBIDDEN = 'HLF_USER_STATUS_FORBIDDEN',
    USER_CRYPTO_KEY_INVALID = 'HLF_USER_CRYPTO_KEY_INVALID',
    USER_CRYPTO_KEY_NOT_FOUND = 'HLF_USER_CRYPTO_KEY_NOT_FOUND',
    // Coin
    COIN_NOT_FOUND = 'COIN_NOT_FOUND',
    COIN_ALREADY_EXISTS = 'COIN_ALREADY_EXISTS',
    COIN_OBJECT_NOT_FOUND = 'COIN_OBJECT_NOT_FOUND',
    COIN_WHITELIST_FORBIDDEN = 'COIN_WHITELIST_FORBIDDEN',
    COIN_BLACKLIST_FORBIDDEN = 'COIN_WHITELIST_FORBIDDEN',
}
