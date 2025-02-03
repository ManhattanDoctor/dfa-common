
import { TransportHttp, TransformUtil, ILogger, LoggerLevel, TraceUtil } from '@ts-core/common';
import { IOAuthPopUpDto } from '@ts-core/oauth';
import { IInitDto, IInitDtoResponse, ILoginDto, ILoginDtoResponse } from './login';
import * as _ from 'lodash';
import { User } from '../user';

export class Client extends TransportHttp {

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(logger: ILogger, url?: string, level?: LoggerLevel) {
        super(logger, { method: 'get', isHandleError: true, isHandleLoading: true, headers: {} });

        if (!_.isNil(url)) {
            this.url = url;
        }
        if (!_.isNil(level)) {
            this.level = level;
        }
    }

    // --------------------------------------------------------------------------
    //
    //  Auth Methods
    //
    // --------------------------------------------------------------------------

    public async login(data: ILoginDto): Promise<ILoginDtoResponse> {
        return this.call<ILoginDtoResponse, ILoginDto>(LOGIN_URL, { data: TraceUtil.addIfNeed(data), method: 'post' });
    }

    public async init(data?: IInitDto): Promise<IInitDtoResponse> {
        let item = await this.call<IInitDtoResponse, IInitDto>(INIT_URL, { data: TraceUtil.addIfNeed(data) });
        item.user = TransformUtil.toClass(User, item.user);
        return item;
    }

    public async logout(traceId?: string): Promise<void> {
        // return this.call<void, ITraceable>(LOGOUT_URL, { data: TraceUtil.addIfNeed({ traceId }), method: 'post' });
    }

   
    // --------------------------------------------------------------------------
    //
    //  Other Methods
    //
    // --------------------------------------------------------------------------

    public async oauth(state: string): Promise<IOAuthPopUpDto> {
        return this.call<IOAuthPopUpDto>(`${OAUTH_URL}/${state}`, { data: TraceUtil.addIfNeed({}) });
    }

    public async locale(project: string, locale: string, version?: string): Promise<any> {
        return this.call<any>(`${LOCALE_URL}/${project}/${locale}`, { data: { version } });
    }

    //--------------------------------------------------------------------------
    //
    // 	Public Properties
    //
    //--------------------------------------------------------------------------

    public get sid(): string {
        return !_.isNil(this.authorization) ? this.authorization.substring(7) : null;
    }

    public set sid(value: string) {
        this.headers.Authorization = `Bearer ${value}`;
    }

    public get authorization(): string {
        return !_.isNil(this.headers.Authorization) ? this.headers.Authorization : null;
    }

    public get oauthRedirectUrl(): string {
        return `${this.url}${OAUTH_URL}`;
    }
}

const PREFIX = 'api/';

export const OAUTH_URL = PREFIX + 'oauth';
export const LOCALE_URL = PREFIX + 'locale';

export const INIT_URL = PREFIX + 'init';
export const LOGIN_URL = PREFIX + 'login';
export const LOGOUT_URL = PREFIX + 'logout';
