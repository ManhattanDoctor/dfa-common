import { ITraceable } from '@ts-core/common';
import { LoginResource } from './LoginResource';
import { IOpenIdToken } from '@ts-core/openid-common';

export interface IOAuthDto {
    codeOrToken: string;
    redirectUri: string;
}

export interface ILoginDto extends ITraceable {
    data: LoginData;
    resource: LoginResource;
}

export type ILoginDtoResponse = IOpenIdToken;

export type LoginData = IOAuthDto;