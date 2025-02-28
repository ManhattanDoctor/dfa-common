import { Sha512 } from "@ts-core/common";
import * as _ from "lodash";

export class ImageUtil {

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static getCoin(uid: string): string {
        uid = Sha512.hex(uid).substring(0, 32);
        return `https://www.gravatar.com/avatar/${Sha512.hex(uid)}?s=200&d=identicon&r=g`;
    }

    public static getUser(uid: string): string {
        uid = Sha512.hex(uid).substring(0, 32);
        return `https://www.gravatar.com/avatar/${Sha512.hex(uid)}?s=200&d=robohash&r=g`;
    }

    public static getCompany(uid: string): string {
        uid = Sha512.hex(uid).substring(0, 32);
        return `https://www.gravatar.com/avatar/${Sha512.hex(uid)}?s=200&d=monsterid&r=g`;
    }
}