import { ITraceable } from '@ts-core/common';
import { LoginResource } from './LoginResource';
import { OpenIdToken } from '../../token';

export interface IOAuthDto {
    codeOrToken: string;
    redirectUri: string;
}

export interface ILoginDto extends ITraceable {
    data: LoginData;
    resource: LoginResource;
}

export type ILoginDtoResponse = OpenIdToken;

export type LoginData = IOAuthDto;