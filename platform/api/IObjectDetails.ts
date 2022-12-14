import { LedgerObjectType } from "../../ledger";

export interface IObjectDetails {
    type: LedgerObjectType;
    name: string;
    picture: string;
    description: string;
}