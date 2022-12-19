import { LedgerObjectType } from "../../ledger";

export interface ILedgerObjectDetails {
    id: number;
    type: LedgerObjectType;
    name: string;
    picture: string;
    description: string;
}