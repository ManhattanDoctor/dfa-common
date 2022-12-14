import { IPaginable, IPagination } from '@ts-core/common';
import { ITraceable } from '@ts-core/common';
import { LedgerAction } from '../../LedgerAction';

export interface ILedgerActionListDto extends IPaginable<LedgerAction>, ITraceable { }

export interface ILedgerActionListDtoResponse extends IPagination<LedgerAction> { }
