import * as _ from 'lodash';

export class OpenIdToken {
    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    public access: IToken;
    public refresh: IToken;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(item: any) {
        if (!_.isEmpty(item)) {
            this.access = { value: item.access_token, expiresIn: item.expires_in };
            this.refresh = { value: item.refresh_token, expiresIn: item.refresh_expires_in };
        }
    }

    // --------------------------------------------------------------------------
    //
    //  Public Properties
    //
    // --------------------------------------------------------------------------

}

export interface IToken {
    value: string;
    expiresIn: number;
}

