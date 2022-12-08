import { IPaginable, IPagination } from '@ts-core/common';
import { ITraceable } from '@ts-core/common';
import { CompanyVoting } from '../../company/CompanyVoting';

export interface ICompanyVotingListDto extends IPaginable<CompanyVoting>, ITraceable { }

export interface ICompanyVotingListDtoResponse extends IPagination<CompanyVoting> { }
