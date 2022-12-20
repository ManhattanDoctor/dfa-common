import { Sha512 } from "@ts-core/common";
import { LedgerObjectType } from "../../ledger";

export interface ILedgerObjectDetails {
    id: number;
    type: LedgerObjectType;
    name: string;
    picture: string;
    description: string;
}

export function ledgerObjectPicture(ledgerUid: string): string {
    return `https://www.gravatar.com/avatar/${Sha512.hex(ledgerUid)}?s=200&d=identicon&r=g`;
}