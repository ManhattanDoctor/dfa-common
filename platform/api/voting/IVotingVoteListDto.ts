import { IPaginable, IPagination } from '@ts-core/common';
import { ITraceable } from '@ts-core/common';
import { VotingVote } from '../../voting';

export interface IVotingVoteListDto extends IPaginable<VotingVote>, ITraceable { }

export interface IVotingVoteListDtoResponse extends IPagination<VotingVote> { }
