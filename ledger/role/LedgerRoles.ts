import { LedgerRole } from "./LedgerRole";
import { LedgerCompanyRole } from "./LedgerCompanyRole";
import { LedgerProjectRole } from "./LedgerProjectRole";

export type LedgerRoles = LedgerRole | LedgerCompanyRole | LedgerProjectRole;
export const LedgerRolesArray = [LedgerRole, LedgerCompanyRole, LedgerProjectRole];
