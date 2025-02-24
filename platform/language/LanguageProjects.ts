import { ILanguageProjectSettings } from '@ts-core/language';

let common = [
    '.json',
    'Error.json',
    'Format.json',
    'Common.json',

    'User.json',
    'Coin.json',
    'Login.json',
    'Action.json',
    'Company.json',
]
export const LanguageProjects: Array<ILanguageProjectSettings> = [
    {
        name: 'platform',
        locales: ['ru'],
        prefixes: [
            ...common,

            'Platform.json'
        ]
    }
]
