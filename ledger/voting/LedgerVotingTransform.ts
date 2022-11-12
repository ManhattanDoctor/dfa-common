import { TransformUtil } from "@ts-core/common";
import { LedgerCompanyVoting } from "../company/voting";
import { LedgerBadRequestError } from "../error";
import { LedgerVoting } from "./LedgerVoting";

export function ledgerVotingTransform(item: LedgerVoting): LedgerCompanyVoting {
    if (item.hasOwnProperty('companyUid')) {
        TransformUtil.toClass(LedgerCompanyVoting, item);
    }
    throw new LedgerBadRequestError('Unable to transform LedgerVoting')
}
