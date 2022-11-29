import { Type } from 'class-transformer';
import { ProjectStatus } from './ProjectStatus';
import { ProjectPreferences } from './ProjectPreferences';
import { CoinBalance } from '../coin/CoinBalance';

export class Project {
    id: number;
    status: ProjectStatus;
    userId: number;
    companyId: number;
    ledgerUid: string;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;

    @Type(() => ProjectPreferences)
    preferences: ProjectPreferences;

    balances?: Array<CoinBalance>;
}