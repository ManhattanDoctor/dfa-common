import { ILanguageProjectSettings } from '@ts-core/language';

let common = [
    '.json',
    'Error.json',
    'Format.json',
    'Common.json',

    'User.json',
    'Login.json',
    'Company.json',
]
export let LanguageProjects: Array<ILanguageProjectSettings> = [
    {
        name: 'platform',
        locales: ['ru'],
        prefixes: [
            ...common,

            'Platform.json'
        ]
    }
]
