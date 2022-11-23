import { User } from '../user';
import { LedgerCompanyRole } from '../../ledger/role';

export class CompanyUser extends User {
    roles: Array<LedgerCompanyRole>;
}

