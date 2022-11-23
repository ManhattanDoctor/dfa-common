import * as _ from 'lodash';

export class ProjectPreferences {
    logo: string;
    title: string;
    description: string;
}


export const PROJECT_PREFERENCES_STRING_MAX_LENGTH = 256;

export const PROJECT_PREFERENCES_TITLE_MIN_LENGTH = 5;
export const PROJECT_PREFERENCES_TITLE_MAX_LENGTH = 50;

export const PROJECT_PREFERENCES_DESCRIPTION_MIN_LENGTH = 5;
export const PROJECT_PREFERENCES_DESCRIPTION_MAX_LENGTH = 20480;

export const PROJECT_PREFERENCES_LOGO_MAX_LENGTH = PROJECT_PREFERENCES_STRING_MAX_LENGTH;
