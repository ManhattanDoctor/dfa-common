import { FilterableConditionType } from "@ts-core/common";

export enum ErrorCode {
    //
    REQUEST_INVALID = 'REQUEST_INVALID',
    //
    USER_UNDEFINED = 'USER_UNDEFINED',
    USER_NOT_FOUND = 'USER_NOT_FOUND',
    USER_TYPE_INVALID = 'USER_TYPE_INVALID',
    USER_STATUS_INVALID = 'USER_STATUS_INVALID',
    USER_HLF_NOT_FOUND = 'USER_HLF_NOT_FOUND',
}

export interface IInvalidValueDto<T> {
    name?: string;
    value: T | Array<T>;
    expected?: T | Array<T>;
    condition?: FilterableConditionType;
}
