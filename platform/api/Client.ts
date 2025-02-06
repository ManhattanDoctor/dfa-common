
import { TransportHttp, TransformUtil, ILogger, LoggerLevel, TraceUtil, TransportHttpCommandAsync, ITransportHttpRequest, ITransportCommandOptions } from '@ts-core/common';
import { IInitDto, IInitDtoResponse, ILoginDto, ILoginDtoResponse } from './login';
import { IConfigDtoResponse } from './config';
import { User } from '../user';
import { KeycloakTokenManager } from '@core/service/KeycloakTokenManager';
import * as _ from 'lodash';

export class Client extends TransportHttp {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    public manager: KeycloakTokenManager;
    private _sid: string;

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
    //  Protected Methods
    //
    // --------------------------------------------------------------------------


    protected prepareCommand<U>(command: ITransportCommand<U>, options: ITransportCommandOptions): void {
        super.prepareCommand(command, options);

        let request = command.request as ITransportHttpRequest;
        if (!_.isNil(this._sid)) {
            request.headers = {
                Authorization: `Bearer ${this._sid}`
            }
        }
    }

    public call<V = any, U = any>(path: string, request?: ITransportHttpRequest<U>, options?: ITransportCommandOptions): Promise<V> {
        return this.sendListen(new TransportHttpCommandAsync(path, request), options);
    }

    public async openIdGetTokenByRefreshToken(token: string): Promise<any> {
        return this.sendListen(new TransportHttpCommandAsync(`${OPEN_ID_GET_TOKEN_BY_REFRESH_TOKEN_URL}/${token}`, { data: { method: 'post' } }));
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

    // --------------------------------------------------------------------------
    //
    //  Other Methods
    //
    // --------------------------------------------------------------------------

    public async language(project: string, locale: string, version?: string): Promise<any> {
        return this.call<any>(`${LANGUAGE_URL}/${project}/${locale}`, { data: { version } });
    }

    //--------------------------------------------------------------------------
    //
    // 	Public Properties
    //
    //--------------------------------------------------------------------------

    public set sid(value: string) {
        // this.headers.Authorization = `Bearer ${value}`;
        this._sid = value;
    }
}

const PREFIX = 'api/';

export const OAUTH_URL = PREFIX + 'oauth';
export const CONFIG_URL = PREFIX + 'config';
export const LANGUAGE_URL = PREFIX + 'language';

export const INIT_URL = PREFIX + 'init';
export const LOGIN_URL = PREFIX + 'login';
export const LOGOUT_URL = PREFIX + 'logout';

export const OPEN_ID_GET_TOKEN_BY_REFRESH_TOKEN_URL = PREFIX + 'openId/getTokenByRefreshToken';
