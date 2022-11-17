import * as _ from 'lodash';
import { LedgerCompanyRole } from '../role/LedgerCompanyRole';
import { LedgerBadRequestError } from '../error/LedgerError';

export class LedgerCompanyRoleList {
    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static create(): LedgerCompanyRoleList {
        let item = new LedgerCompanyRoleList();
        item.storage = new Object();
        return item;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    public storage: Object;

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
        let value = this.storage[role];
        return !_.isNil(value) ? value : 0;
    }

    public remove(role: LedgerCompanyRole): void {
        let value = this.storage[role];
        if (_.isNil(value)) {
            throw new LedgerBadRequestError(`Roles amount is nil`);
        }
        this.storage[role]--;
        if (this.storage[role] < 0) {
            throw new LedgerBadRequestError(`Roles amount must be granter than zero`);
        }
    }
}