
import { ITraceable } from '@ts-core/common';
import { LedgerCompanyRegulationType } from '../../../ledger/company';
import { ILedgerCompanyVotingProposal } from '../../../ledger/company/voting';

export interface IVotingAddDto extends ITraceable {
    type: LedgerCompanyRegulationType;
    proposal: ILedgerCompanyVotingProposal;
}

export interface IVotingAddDtoResponse { }
