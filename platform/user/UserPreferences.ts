import * as _ from 'lodash';

export class UserPreferences {
    email: string;
    name?: string;
    theme?: UserPreferencesTheme;
    phone?: string;
    picture?: string;
    language?: UserPreferencesLanguage;
}

export enum UserPreferencesTheme {
    DARK = 'DARK',
    LIGHT = 'LIGHT',
}

export enum UserPreferencesLanguage {
    RU = 'ru',
    EN = 'en',
}

export const USER_PREFERENCES_NAME_MIN_LENGTH = 1;
export const USER_PREFERENCES_NAME_MAX_LENGTH = 50;

export const USER_PREFERENCES_PHONE_MAX_LENGTH = 12;
export const USER_PREFERENCES_EMAIL_MAX_LENGTH = 256;
export const USER_PREFERENCES_PICTURE_MAX_LENGTH = 1024;
