import { ValidateUtil } from "./ValidateUtil";

export class RegExpUtil {
    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static DATE_TIME = `[0-9]{14}`;
    public static TRANSACTION_HASH = `[0-9a-fA-F]{64}`;

    public static DESCRIPTION_REG_EXP = new RegExp(`^.{${ValidateUtil.DESCRIPTION_MIN_LENGTH},${ValidateUtil.DESCRIPTION_MAX_LENGTH}}`);
}
