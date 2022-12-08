import { IPaginable, IPagination } from '@ts-core/common';
import { ITraceable } from '@ts-core/common';
import { CompanyVoting } from '../../company/CompanyVoting';

export interface IVotingListDto extends IPaginable<CompanyVoting>, ITraceable { }

export interface IVotingListDtoResponse extends IPagination<CompanyVoting> { }
