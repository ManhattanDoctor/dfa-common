import * as _ from 'lodash';

export class CompanyPreferences {
    public title: string;
    public phone?: string;
    public email?: string;
    public picture?: string;
    public website?: string;
    public address?: string;
    public description?: string;
}

export const COMPANY_PREFERENCES_INN_MIN_LENGTH = 10;
export const COMPANY_PREFERENCES_INN_MAX_LENGTH = 12;

export const COMPANY_PREFERENCES_TITLE_MIN_LENGTH = 5;
export const COMPANY_PREFERENCES_TITLE_MAX_LENGTH = 100;

export const COMPANY_PREFERENCES_EMAIL_MAX_LENGTH = 128;
export const COMPANY_PREFERENCES_PICTURE_MAX_LENGTH = 256;
export const COMPANY_PREFERENCES_WEBSITE_MAX_LENGTH = 64;
export const COMPANY_PREFERENCES_ADDRESS_MAX_LENGTH = 256;
export const COMPANY_PREFERENCES_DESCRIPTION_MAX_LENGTH = 1024;
