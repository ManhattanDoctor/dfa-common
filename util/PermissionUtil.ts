import * as _ from 'lodash';

export class PermissionUtil {
    // --------------------------------------------------------------------------
    //
    //  Common Methods
    //
    // --------------------------------------------------------------------------

    public static isHasRole(item: string | Array<string>, items: string | Array<string>): boolean {
        if (!_.isArray(item)) {
            item = [item];
        }
        if (!_.isArray(items)) {
            items = [items];
        }
        return !_.isEmpty(_.intersection(item, items));
    }

    // --------------------------------------------------------------------------
    //
    //  Project Methods
    //
    // --------------------------------------------------------------------------


}