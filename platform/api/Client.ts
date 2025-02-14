
import { TransformUtil, ILogger, LoggerLevel, TraceUtil, ITransportHttpRequest, ITransportCommandOptions, ITransportCommand, ITransportHttpSettings, ISignature } from '@ts-core/common';
import { IInitDto, IInitDtoResponse, ILoginDto, ILoginDtoResponse } from './login';
import { IConfigDtoResponse } from './config';
import { User } from '../user';
import { IOpenIdRefreshable, KeycloakHttpTransport, KeycloakTokenManager } from '@ts-core/openid-common';
import { ITaxCompanyGetDtoResponse } from './tax';
import { Company, CompanyTaxDetails } from '../company';
import { ICryptoKey } from '@hlf-core/common';
import { IUserEditDto, IUserEditDtoResponse, IUserGetDtoResponse } from './user';
import { ICompanyEditDto, ICompanyEditDtoResponse, ICompanyGetDtoResponse } from './company';
import * as _ from 'lodash';

export class Client extends KeycloakHttpTransport {

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(logger: ILogger, token: KeycloakTokenManager, url?: string, level?: LoggerLevel) {
        super(logger, { method: 'get', isHandleError: true, isHandleLoading: true, headers: {} });
        this.url = url;
        this.token = token;
        this.level = level;
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected getTokenByRefreshToken(token: string): Promise<IOpenIdRefreshable> {
        return this.call<IOpenIdRefreshable>(`${OPEN_ID_GET_TOKEN_BY_REFRESH_TOKEN_URL}/${token}`, { method: 'post' });
    }

    protected isSkipRefreshToken<U = any>(path: string, request?: ITransportHttpRequest<U>, options?: ITransportCommandOptions): boolean {
        for (let item of SKIP_REFRESH_TOKEN_URLS) {
            if (_.includes(path, item)) {
                return true;
            }
        }
        return false;
    }

    // --------------------------------------------------------------------------
    //
    //  Auth Methods
    //
    // --------------------------------------------------------------------------

    public async init(data?: IInitDto): Promise<IInitDtoResponse> {
        let item = await this.call<IInitDtoResponse, IInitDto>(INIT_URL, { data: TraceUtil.addIfNeed(data) });
        item.user = TransformUtil.toClass(User, item.user);
        item.company = TransformUtil.toClass(Company, item.company);
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
    //  User Methods
    //
    // --------------------------------------------------------------------------

    public async userGet(id: string): Promise<IUserGetDtoResponse> {
        let item = await this.call<IUserGetDtoResponse>(`${USER_URL}/${id}`);
        return TransformUtil.toClass(User, item);
    }

    public async userEdit(id: string, data: IUserEditDto): Promise<IUserEditDtoResponse> {
        let item = await this.call<IUserEditDtoResponse, IUserEditDto>(`${USER_URL}/${id}`, { method: 'put', data: TraceUtil.addIfNeed(data) });
        return TransformUtil.toClass(User, item);
    }

    // --------------------------------------------------------------------------
    //
    //  Company Methods
    //
    // --------------------------------------------------------------------------

    public async companyGet(id: number): Promise<ICompanyGetDtoResponse> {
        let item = await this.call<ICompanyGetDtoResponse>(`${COMPANY_URL}/${id}`);
        return TransformUtil.toClass(Company, item);
    }

    public async companyEdit(id: number, data: ICompanyEditDto): Promise<ICompanyEditDtoResponse> {
        let item = await this.call<ICompanyEditDtoResponse, ICompanyEditDto>(`${COMPANY_URL}/${id}`, { method: 'put', data: TraceUtil.addIfNeed(data) });
        return TransformUtil.toClass(Company, item);
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

    public async language(project: string, locale: string, version?: string): Promise<any> {
        return this.call<any>(`${LANGUAGE_URL}/${project}/${locale}`, { data: { version } });
    }

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

export const USER_URL = PREFIX + 'user';
export const COMPANY_URL = PREFIX + 'company';

export const OPEN_ID_LOGOUT_BY_REFRESH_TOKEN_URL = 'api/openId/logoutByRefreshToken';
export const OPEN_ID_GET_TOKEN_BY_REFRESH_TOKEN_URL = 'api/openId/getTokenByRefreshToken';

export const CUSTODY_URL = PREFIX + 'custody';

const SKIP_REFRESH_TOKEN_URLS = [
    LOGIN_URL,
    CONFIG_URL,
    LANGUAGE_URL,
    OPEN_ID_LOGOUT_BY_REFRESH_TOKEN_URL,
    OPEN_ID_GET_TOKEN_BY_REFRESH_TOKEN_URL
];
