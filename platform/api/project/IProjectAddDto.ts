
import { ITraceable } from '@ts-core/common';
import { ProjectPreferences } from '../../project';
import { UserProject } from '../../user';

export interface IProjectAddDto extends ITraceable {
    preferences: Partial<ProjectPreferences>;
}
export declare type IProjectAddDtoResponse = UserProject;
