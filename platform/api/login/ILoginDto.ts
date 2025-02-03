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
    accessToken: string;
    accessTokenExpiresIn: number;
    refreshToken: string;
    refreshTokenExpiresIn: number;
}

export type LoginData = IOAuthDto;