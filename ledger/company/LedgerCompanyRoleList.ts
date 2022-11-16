import * as _ from 'lodash';
import { LedgerCompanyRole } from '../role/LedgerCompanyRole';
import { LedgerBadRequestError } from '../error/LedgerError';

export class LedgerCompanyRoleList {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    private _storage: Object;

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public add(role: LedgerCompanyRole): void {
        let name = role.toString();
        let value = this.storage[name];
        if (_.isNil(value)) {
            this.storage[name] = 0;
        }
        this.storage[name]++;
    }

    public get(role: LedgerCompanyRole): number {
        let name = role.toString();
        let value = this.storage[name];
        return !_.isNil(value) ? value : 0;
    }

    public remove(role: LedgerCompanyRole): void {
        let name = role.toString();
        let value = this.storage[name];
        if (_.isNil(value)) {
            throw new LedgerBadRequestError(`Roles amount is nil`);
        }
        this.storage[name]--;
        if (this.storage[name] < 0) {
            throw new LedgerBadRequestError(`Roles amount must be granter than zero`);
        }
    }

    // --------------------------------------------------------------------------
    //
    //  Public Properties
    //
    // --------------------------------------------------------------------------

    public get storage(): Object {
        if (_.isNil(this._storage)) {
            this._storage = new Object();
        }
        return this._storage;
    }
}