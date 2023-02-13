import { TransformUtil } from "@ts-core/common";
import { LedgerVotingCompany } from "../voting/company/LedgerVotingCompany";
import { LedgerBadRequestError } from "../error/LedgerError";
import { LedgerVoting } from "./LedgerVoting";

export function ledgerVotingTransform(item: LedgerVoting): LedgerVotingCompany {
    if (item.hasOwnProperty('companyUid')) {
        return TransformUtil.toClass(LedgerVotingCompany, item);
    }
    throw new LedgerBadRequestError('LedgerVoting is nil')
}
