import * as _ from 'lodash';
import { LedgerCompanyRole } from '../role/LedgerCompanyRole';
import { LedgerBadRequestError } from '../error/LedgerError';
import { MathUtil } from '@ts-core/common';

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

    private storage: Object;

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public add(role: LedgerCompanyRole): void {
        let value = this.storage[role];
        if (_.isNil(value)) {
            value = '0';
        }
        this.storage[role] = MathUtil.add(value, '1');
    }

    public get(role: LedgerCompanyRole): string {
        let value = this.storage[role];
        return !_.isNil(value) ? value : '0';
    }

    public remove(role: LedgerCompanyRole): void {
        let value = this.storage[role];
        if (_.isNil(value)) {
            throw new LedgerBadRequestError(`Roles amount is nil`);
        }
        this.storage[role] = MathUtil.subtract(value, '1');
        if (MathUtil.lessThan(this.storage[role], '0')) {
            throw new LedgerBadRequestError(`Roles amount must be granter than zero`);
        }
    }
}