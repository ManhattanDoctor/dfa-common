
import { ITraceable } from '@ts-core/common';

export interface ICoinExchangeGetDtoResponse extends ITraceable {
    to: string;
    from: string;
    rate: string;
}

export interface ICoinExchangeDto extends ICoinExchangeGetDtoResponse {
    amount: string;
}
