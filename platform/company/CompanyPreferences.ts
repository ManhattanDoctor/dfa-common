import * as _ from 'lodash';

export class CompanyPreferences {
    logo: string;
    title: string;
    description: string;
}


export const COMPANY_PREFERENCES_STRING_MAX_LENGTH = 256;

export const COMPANY_PREFERENCES_TITLE_MIN_LENGTH = 5;
export const COMPANY_PREFERENCES_TITLE_MAX_LENGTH = 50;

export const COMPANY_PREFERENCES_DESCRIPTION_MIN_LENGTH = 5;
export const COMPANY_PREFERENCES_DESCRIPTION_MAX_LENGTH = 20480;

export const COMPANY_PREFERENCES_LOGO_MAX_LENGTH = COMPANY_PREFERENCES_STRING_MAX_LENGTH;
