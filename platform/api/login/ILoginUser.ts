import { UserPreferences } from "../../user";

import * as _ from "lodash";
import { OAuthUser } from "@ts-core/oauth";
import { ObjectUtil } from "@ts-core/common";

export class LoginUser {
    //--------------------------------------------------------------------------
    //
    // 	Properties
    //
    //--------------------------------------------------------------------------

    public id: number | string;
    public preferences: Partial<UserPreferences>;

    //--------------------------------------------------------------------------
    //
    // 	Constructor
    //
    //--------------------------------------------------------------------------

    constructor(item?: OAuthUser) {
        if (!_.isNil(item)) {
            this.parse(item);
        }
    }

    //--------------------------------------------------------------------------
    //
    // 	Static Methods
    //
    //--------------------------------------------------------------------------

    protected parse(item: OAuthUser): void {
        this.id = item.id.toString();
        this.preferences = {};
        ObjectUtil.copyProperties(item, this.preferences, ['name', 'email', 'phone', 'locale', 'isMale', 'picture', 'city', 'country', 'location', 'birthday', 'description'])
    }

}