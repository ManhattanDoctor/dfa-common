import { getUid, UID, ExtendedError } from '@ts-core/common';
import * as _ from 'lodash';
import { CoinType } from './coin';

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
export class UserForbiddenError extends Error<void> {
    constructor() {
        super(ErrorCode.USER_FORBIDDEN, `User forbidden`)
    }
}
export class UserStatusForbiddenError extends Error<IUserStatusForbiddenDetails> {
    constructor(item: UID, details: IUserStatusForbiddenDetails) {
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
export class CoinDecimalsInvalidError extends Error<void> {
    constructor(decimals: number) {
        super(ErrorCode.COIN_DECIMALS_INVALID, `Coin decimals must be "${decimals}"`);
    }
}
export class CoinAmountMinimumInvalidError extends Error<void> {
    constructor(minimum: string) {
        super(ErrorCode.COIN_AMOUNT_MINIMUM_INVALID, `Coin amount must be granter or equal "${minimum}"`);
    }
}
export class CoinAmountMaximumInvalidError extends Error<void> {
    constructor(maximum: string) {
        super(ErrorCode.COIN_AMOUNT_MAXIMUM_INVALID, `Coin amount must be less or equal "${maximum}"`);
    }
}
export class CoinAmountDiscreteInvalidError extends Error<void> {
    constructor(discrete: string) {
        super(ErrorCode.COIN_AMOUNT_DISCRETE_INVALID, `Coin amount must be discrete of "${discrete}"`);
    }
}
export class CoinEmissionMaximumInvalidError extends Error<void> {
    constructor(maximum: string) {
        super(ErrorCode.COIN_EMISSION_MAXIMUM_INVALID, `Coin emission must be less or equal "${maximum}"`);
    }
}

export interface IUserStatusForbiddenDetails {
    has: string;
    required: string;
}

export enum ErrorCode {
    // User
    USER_NOT_FOUND = 'HLF_USER_NOT_FOUND',
    USER_FORBIDDEN = 'HLF_USER_FORBIDDEN',
    USER_ALREADY_EXISTS = 'HLF_USER_ALREADY_EXISTS',
    USER_STATUS_FORBIDDEN = 'HLF_USER_STATUS_FORBIDDEN',
    USER_CRYPTO_KEY_INVALID = 'HLF_USER_CRYPTO_KEY_INVALID',
    USER_CRYPTO_KEY_NOT_FOUND = 'HLF_USER_CRYPTO_KEY_NOT_FOUND',
    // Coin
    COIN_NOT_FOUND = 'COIN_NOT_FOUND',
    COIN_ALREADY_EXISTS = 'COIN_ALREADY_EXISTS',
    COIN_DECIMALS_INVALID = 'COIN_DECIMALS_INVALID',
    COIN_OBJECT_NOT_FOUND = 'COIN_OBJECT_NOT_FOUND',
    COIN_WHITELIST_FORBIDDEN = 'COIN_WHITELIST_FORBIDDEN',
    COIN_BLACKLIST_FORBIDDEN = 'COIN_WHITELIST_FORBIDDEN',
    COIN_AMOUNT_MINIMUM_INVALID = 'COIN_AMOUNT_MINIMUM_INVALID',
    COIN_AMOUNT_MAXIMUM_INVALID = 'COIN_AMOUNT_MAXIMUM_INVALID',
    COIN_AMOUNT_DISCRETE_INVALID = 'COIN_AMOUNT_DISCRETE_INVALID',
    COIN_EMISSION_MAXIMUM_INVALID = 'COIN_EMISSION_MAXIMUM_INVALID',
}
