
import { ITraceable } from '@ts-core/common';
import { ProjectPreferences, ProjectStatus } from '../../project';
import { UserProject } from '../../user';

export interface IProjectEditDto extends ITraceable {
    id?: number;
    status?: ProjectStatus;
    preferences?: Partial<ProjectPreferences>;
}
export declare type IProjectEditDtoResponse = UserProject;
