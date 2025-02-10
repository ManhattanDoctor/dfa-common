
import { TransformUtil, ILogger, LoggerLevel, TraceUtil, ITransportHttpRequest, ITransportCommandOptions, ITransportCommand, ITransportHttpSettings, ISignature } from '@ts-core/common';
import { IInitDto, IInitDtoResponse, ILoginDto, ILoginDtoResponse } from './login';
import { IConfigDtoResponse } from './config';
import { User } from '../user';
import { IOpenIdToken, KeycloakHttpTransport } from '@ts-core/openid-common';
import { ITaxCompanyGetDtoResponse } from './tax';
import { CompanyTaxDetails } from '../company';
import { ICryptoKey } from '@hlf-core/common';
import * as _ from 'lodash';

export class Client extends KeycloakHttpTransport {
    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(logger: ILogger, url?: string, level?: LoggerLevel) {
        super(logger, { method: 'get', isHandleError: true, isHandleLoading: true, headers: {} });
        this.url = url;
        this.level = level;
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected getTokenByRefreshToken(token: string): Promise<IOpenIdToken> {
        return this.call<IOpenIdToken>(`${OPEN_ID_GET_TOKEN_BY_REFRESH_TOKEN_URL}/${token}`, { method: 'post' });
    }

    protected isSkipRefreshToken<U = any>(path: string, request?: ITransportHttpRequest<U>, options?: ITransportCommandOptions): boolean {
        switch (path) {
            case LOGIN_URL:
            case CONFIG_URL:
            case LANGUAGE_URL:
            case OPEN_ID_LOGOUT_BY_REFRESH_TOKEN_URL:
            case OPEN_ID_GET_TOKEN_BY_REFRESH_TOKEN_URL:
                return true;
            default:
                return false;
        }
    }

    // --------------------------------------------------------------------------
    //
    //  Auth Methods
    //
    // --------------------------------------------------------------------------

    public async init(data?: IInitDto): Promise<IInitDtoResponse> {
        let item = await this.call<IInitDtoResponse, IInitDto>(INIT_URL, { data: TraceUtil.addIfNeed(data) });
        item.user = TransformUtil.toClass(User, item.user);
        return item;
    }

    public async login(data: ILoginDto): Promise<ILoginDtoResponse> {
        return this.call<ILoginDtoResponse, ILoginDto>(LOGIN_URL, { data: TraceUtil.addIfNeed(data), method: 'post' });
    }

    public async config(): Promise<IConfigDtoResponse> {
        return this.call<IConfigDtoResponse, void>(CONFIG_URL);
    }

    public async logout(token: string): Promise<void> {
        return this.call<void>(`${OPEN_ID_LOGOUT_BY_REFRESH_TOKEN_URL}/${token}`, { method: 'post' });
    }

    // --------------------------------------------------------------------------
    //
    //  Custody Methods
    //
    // --------------------------------------------------------------------------

    public async custodyKeyGet(): Promise<ICryptoKey> {
        return this.call<ICryptoKey, void>(CUSTODY_URL);
    }

    public async custodyKeySign(message: string): Promise<string> {
        return this.call<string, any>(`${CUSTODY_URL}/sign`, { data: { message }, method: 'post' });
    }

    // --------------------------------------------------------------------------
    //
    //  Other Methods
    //
    // --------------------------------------------------------------------------

    public async taxCompanyGet(value: string | number): Promise<ITaxCompanyGetDtoResponse> {
        let item = await this.call<ITaxCompanyGetDtoResponse>(`${TAX_COMPANY_URL}/${value}`);
        return TransformUtil.toClass(CompanyTaxDetails, item);
    }
}


const PREFIX = 'api/';

export const OAUTH_URL = PREFIX + 'oauth';
export const CONFIG_URL = PREFIX + 'config';
export const LANGUAGE_URL = PREFIX + 'language';

export const INIT_URL = PREFIX + 'init';
export const LOGIN_URL = PREFIX + 'login';
export const LOGOUT_URL = PREFIX + 'logout';
export const TAX_COMPANY_URL = PREFIX + 'tax/company';

export const OPEN_ID_LOGOUT_BY_REFRESH_TOKEN_URL = 'api/openId/logoutByRefreshToken';
export const OPEN_ID_GET_TOKEN_BY_REFRESH_TOKEN_URL = 'api/openId/getTokenByRefreshToken';


export const CUSTODY_URL = PREFIX + 'custody';

