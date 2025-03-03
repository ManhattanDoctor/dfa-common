import * as _ from "lodash";

export class ObjectUtil {
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------

    public static copy(from: any, to: any): boolean {
        if (_.isNil(from) || _.isNil(to) || _.isEmpty(from)) {
            return false;
        }
        let isChanged = false;
        for (let [key, value] of Object.entries(from)) {
            if (_.isObject(value) || _.isUndefined(value)) {
                continue;
            }
            if (value === to[key]) {
                continue;
            }
            to[key] = value;
            isChanged = true;
        }
        return isChanged;
    }
}