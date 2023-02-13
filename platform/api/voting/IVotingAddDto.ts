
import { ITraceable } from '@ts-core/common';
import { LedgerCompanyRegulationType } from '../../../ledger/company/LedgerCompanyRegulation';
import { ILedgerVotingCompanyProposal } from '../../../ledger/voting/company/LedgerVotingCompanyProposal';

export interface IVotingAddDto extends ITraceable {
    type: LedgerCompanyRegulationType;
    proposal: ILedgerVotingCompanyProposal;
}

export interface IVotingAddDtoResponse { }
