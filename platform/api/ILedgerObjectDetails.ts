import { LedgerObjectType } from "../../ledger";

export interface ILedgerObjectDetails {
    type: LedgerObjectType;
    name: string;
    picture: string;
    description: string;
}