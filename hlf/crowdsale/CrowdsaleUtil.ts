import { ClassType, getUid, UID } from '@ts-core/common';
import * as _ from 'lodash';

export class CrowdsaleUtil {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static PREFIX = 'crowdsale';
    public static UID_REG_EXP = new RegExp(`^${CrowdsaleUtil.PREFIX}/[0-9]{14}/[0-9a-fA-F]{64}$`);
    public static MAX_CREATED_DATE = new Date(2500, 0);

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static createUid(created: Date, hash: string): string {
        let time = CrowdsaleUtil.MAX_CREATED_DATE.getTime() - created.getTime();
        return `${CrowdsaleUtil.PREFIX}/${_.padStart(time.toString(), 14, '0')}/${hash}`;
    }

    public static isCrowdsale(uid: UID): boolean {
        return CrowdsaleUtil.UID_REG_EXP.test(getUid(uid));
    }
}
