import { ITraceable } from "@ts-core/common";
import { ILedgerObjectDetails } from "../ILedgerObjectDetails";

export interface ILedgerObjectDetailsGetDto extends ITraceable {
    ledgerUid: string;
}

export declare type ILedgerObjectDetailsGetDtoResponse = ILedgerObjectDetails;
