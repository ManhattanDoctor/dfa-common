import { ITraceable } from "@ts-core/common";

export interface ICoinWithdrawDto extends ITraceable {
    to: string;
    amount: string;
    coinUid: string;
    objectUid: string;
}

export interface ICoinWithdrawDtoResponse extends ITraceable {
    transactionHash: string;
}
