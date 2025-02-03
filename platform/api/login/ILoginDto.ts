import { ITraceable } from '@ts-core/common';
import { LoginResource } from './LoginResource';

export interface IOAuthDto {
    codeOrToken: string;
    redirectUri: string;
}

export interface ILoginDto extends ITraceable {
    data: LoginData;
    resource: LoginResource;
}

export interface ILoginDtoResponse {
    access: {
        token: string;
        expiresIn: number;
    },
    refresh: {
        token: string;
        expiresIn: number;
    }
}

export type LoginData = IOAuthDto;