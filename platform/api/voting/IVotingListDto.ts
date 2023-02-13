import { VotingCompany } from '../../../platform/voting/company/VotingCompany';
import { IPaginable, IPagination } from '@ts-core/common';
import { ITraceable } from '@ts-core/common';

export interface IVotingListDto extends IPaginable<VotingCompany>, ITraceable { }

export interface IVotingListDtoResponse extends IPagination<VotingCompany> { }
