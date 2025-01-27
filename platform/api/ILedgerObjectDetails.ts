import { Sha512 } from "@ts-core/common";
import { ObjectType } from "../../hlf";

export interface ILedgerObjectDetails {
    id: number;
    type: ObjectType;
    name: string;
    picture: string;
    description: string;
}

export function ledgerObjectPicture(ledgerUid: string): string {
    return `https://www.gravatar.com/avatar/${Sha512.hex(ledgerUid)}?s=200&d=identicon&r=g`;
}