
import * as _ from 'lodash';
import { LedgerCompanyRole } from '../../ledger/role';
import { PermissionUtil } from '../../util';
import { UserCompany, UserType } from '../user';
import { CompanyStatus } from './CompanyStatus';

export class CompanyUtil {

    // --------------------------------------------------------------------------
    //
    //  Company Methods
    //
    // --------------------------------------------------------------------------

    public static isCanProjectAdd(item: UserCompany): boolean {
        return COMPANY_PROJECT_ADD_STATUS.includes(item.status) && PermissionUtil.isHasRole(item.roles, COMPANY_PROJECT_ADD_ROLE);
    }
    public static isCanUserRoleSet(item: UserCompany): boolean {
        return PermissionUtil.isHasRole(item.roles, COMPANY_USER_ROLE_SET_ROLE);
    }
}

export let COMPANY_ADD_TYPE = [UserType.COMPANY_MANAGER];

export let COMPANY_PROJECT_ADD_ROLE = [LedgerCompanyRole.PROJECT_MANAGER];
export let COMPANY_PROJECT_ADD_STATUS = [CompanyStatus.ACTIVE];

export let COMPANY_USER_LIST_ROLE = [LedgerCompanyRole.COMPANY_MANAGER, LedgerCompanyRole.USER_MANAGER, LedgerCompanyRole.COIN_MANAGER, LedgerCompanyRole.PROJECT_MANAGER];

export let COMPANY_USER_ROLE_GET_ROLE = [LedgerCompanyRole.USER_MANAGER, LedgerCompanyRole.COMPANY_MANAGER];
export let COMPANY_USER_ROLE_SET_ROLE = [LedgerCompanyRole.USER_MANAGER, LedgerCompanyRole.COMPANY_MANAGER];

