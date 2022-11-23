import { Type } from 'class-transformer';
import { ProjectStatus } from './ProjectStatus';
import { ProjectPreferences } from './ProjectPreferences';
import { User } from '../user';
import { Company } from '../company';
import { Accounts } from '../account';

export class Project {
    id: number;
    status: ProjectStatus;
    companyId: number;
    ledgerUid?: string;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;

    @Type(() => ProjectPreferences)
    preferences: ProjectPreferences;

    user?: User;
    company?: Company;
}

export interface IProjectBalance {
    required: Accounts,
    collected: Accounts,
}

