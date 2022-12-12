import { Type } from 'class-transformer';
import { ProjectStatus } from './ProjectStatus';
import { ProjectPreferences } from './ProjectPreferences';
import { ILedgreable } from '../ILedgerable';
import { LedgerProjectStatus } from '@project/common/ledger/project';

export class Project implements ILedgreable {
    id: number;
    status: LedgerProjectStatus;
    userId: number;
    companyId: number;
    ledgerUid: string;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;

    @Type(() => ProjectPreferences)
    preferences: ProjectPreferences;
}