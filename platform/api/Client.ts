
import { TransformUtil, ILogger, LoggerLevel, TraceUtil, ITransportHttpRequest, ITransportCommandOptions } from '@ts-core/common';
import { IInitDto, IInitDtoResponse, ILoginDto, ILoginDtoResponse } from './login';
import { IConfigDtoResponse } from './config';
import { User } from '../user';
import { IOpenIdTokenRefreshableManager, IOpenIdTokenRefreshable, OpenIdTokenRefreshableTransport, OpenIdResources, OpenIdResourceValidationOptions, IOpenIdResource } from '@ts-core/openid-common';
import { ITaxCompanyGetDtoResponse } from './tax';
import { Company, CompanyTaxDetails } from '../company';
import { ICryptoKey } from '@hlf-core/common';
import { IUserEditDto, IUserEditDtoResponse, IUserGetDtoResponse, IUserListDto, IUserListDtoResponse } from './user';
import { ICompanyActivateDtoResponse, ICompanyAddDto, ICompanyAddDtoResponse, ICompanyEditDto, ICompanyEditDtoResponse, ICompanyGetDtoResponse, ICompanyListDto, ICompanyListDtoResponse, ICompanyRejectDtoResponse, ICompanySubmitDtoResponse, ICompanyVerifyDtoResponse } from './company';
import { IActionListDto, IActionListDtoResponse } from './action';
import { Action } from '../Action';
import { IEntityGetDtoResponse } from './entity';
import { ICoinActivateDtoResponse, ICoinAddDto, ICoinAddDtoResponse, ICoinBalanceListDto, ICoinBalanceListDtoResponse, ICoinEditDto, ICoinEditDtoResponse, ICoinGetDtoResponse, ICoinListDto, ICoinListDtoResponse, ICoinRejectDtoResponse, ICoinSubmitDtoResponse, ICoinVerifyDtoResponse } from './coin';
import { Coin, CoinBalance } from '../coin';
import * as _ from 'lodash';

export class Client extends OpenIdTokenRefreshableTransport {

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(logger: ILogger, token: IOpenIdTokenRefreshableManager, url?: string, level?: LoggerLevel) {
        super(logger, { method: 'get', isHandleError: true, isHandleLoading: true, headers: {} });
        this.url = url;
        this.token = token;
        this.level = level;
    }

    // --------------------------------------------------------------------------
    //
    //  OpenId Methods
    //
    // --------------------------------------------------------------------------

    protected getRefreshable(): Promise<IOpenIdTokenRefreshable> {
        return this.call<IOpenIdTokenRefreshable>(`${OPEN_ID_GET_TOKEN_BY_REFRESH_TOKEN_URL}/${this.token.refresh.value}`, { method: 'post' });
    }

    protected isSkipCheckRefreshable<U = any>(path: string, request?: ITransportHttpRequest<U>, options?: ITransportCommandOptions): boolean {
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

    public async userEdit(data: IUserEditDto): Promise<IUserEditDtoResponse> {
        let item = await this.call<IUserEditDtoResponse, IUserEditDto>(USER_URL, { method: 'put', data: TraceUtil.addIfNeed(data) });
        return TransformUtil.toClass(User, item);
    }

    public async userList(data: IUserListDto): Promise<IUserListDtoResponse> {
        let item = await this.call<IUserListDtoResponse, IUserListDto>(USER_URL, { method: 'get', data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(User, item.items);
        return item;
    }

    // --------------------------------------------------------------------------
    //
    //  Company Methods
    //
    // --------------------------------------------------------------------------

    public async companyAdd(data: ICompanyAddDto): Promise<ICompanyAddDtoResponse> {
        let item = await this.call<ICompanyAddDtoResponse>(COMPANY_URL, { method: 'post', data: TraceUtil.addIfNeed(data) });
        return TransformUtil.toClass(Company, item);
    }

    public async companyGet(id: number): Promise<ICompanyGetDtoResponse> {
        let item = await this.call<ICompanyGetDtoResponse>(`${COMPANY_URL}/${id}`);
        return TransformUtil.toClass(Company, item);
    }

    public async companyList(data: ICompanyListDto): Promise<ICompanyListDtoResponse> {
        let item = await this.call<ICompanyListDtoResponse, ICompanyListDto>(COMPANY_URL, { method: 'get', data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(Company, item.items);
        return item;
    }

    public async companyEdit(data: ICompanyEditDto): Promise<ICompanyEditDtoResponse> {
        let item = await this.call<ICompanyEditDtoResponse, ICompanyEditDto>(COMPANY_URL, { method: 'put', data: TraceUtil.addIfNeed(data) });
        return TransformUtil.toClass(Company, item);
    }

    public async companyVerify(id: number): Promise<ICompanyVerifyDtoResponse> {
        let item = await this.call<ICompanyVerifyDtoResponse>(`${COMPANY_URL}/${id}/verify`, { method: 'post' });
        return TransformUtil.toClass(Company, item);
    }

    public async companyReject(id: number): Promise<ICompanyRejectDtoResponse> {
        let item = await this.call<ICompanyRejectDtoResponse>(`${COMPANY_URL}/${id}/reject`, { method: 'post' });
        return TransformUtil.toClass(Company, item);
    }

    public async companyActivate(): Promise<ICompanyActivateDtoResponse> {
        let item = await this.call<ICompanyActivateDtoResponse>(`${COMPANY_URL}/activate`, { method: 'post' });
        return TransformUtil.toClass(Company, item);
    }

    public async companySubmit(): Promise<ICompanySubmitDtoResponse> {
        let item = await this.call<ICompanySubmitDtoResponse>(`${COMPANY_URL}/submit`, { method: 'post' });
        return TransformUtil.toClass(Company, item);
    }

    //--------------------------------------------------------------------------
    //
    // 	Coin Methods
    //
    //--------------------------------------------------------------------------

    public async coinAdd(data: ICoinAddDto): Promise<ICoinAddDtoResponse> {
        let item = await this.call<ICoinAddDtoResponse>(COIN_URL, { method: 'post', data: TraceUtil.addIfNeed(data) });
        return TransformUtil.toClass(Coin, item);
    }

    public async coinGet(id: number): Promise<ICoinGetDtoResponse> {
        let item = await this.call<ICoinGetDtoResponse>(`${COIN_URL}/${id}`);
        return TransformUtil.toClass(Coin, item);
    }

    public async coinList(data?: ICoinListDto): Promise<ICoinListDtoResponse> {
        let item = await this.call<ICoinListDtoResponse, ICoinListDto>(COIN_URL, { data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(Coin, item.items);
        return item;
    }

    public async coinEdit(id: number, data: ICoinEditDto): Promise<ICoinEditDtoResponse> {
        let item = await this.call<ICompanyEditDtoResponse, ICompanyEditDto>(`${COIN_URL}/${id}`, { method: 'put', data: TraceUtil.addIfNeed(data) });
        return TransformUtil.toClass(Coin, item);
    }

    public async coinVerify(id: number): Promise<ICoinVerifyDtoResponse> {
        let item = await this.call<ICoinVerifyDtoResponse>(`${COIN_URL}/${id}/verify`, { method: 'post' });
        return TransformUtil.toClass(Coin, item);
    }

    public async coinReject(id: number): Promise<ICoinRejectDtoResponse> {
        let item = await this.call<ICoinRejectDtoResponse>(`${COIN_URL}/${id}/reject`, { method: 'post' });
        return TransformUtil.toClass(Coin, item);
    }

    public async coinRemove(id: number): Promise<void> {
        await this.call<void>(`${COIN_URL}/${id}`, { method: 'delete' });
    }

    public async coinActivate(id: number): Promise<ICoinActivateDtoResponse> {
        let item = await this.call<ICoinActivateDtoResponse>(`${COIN_URL}/${id}/activate`, { method: 'post' });
        return TransformUtil.toClass(Coin, item);
    }

    public async coinSubmit(id: number): Promise<ICoinSubmitDtoResponse> {
        let item = await this.call<ICoinSubmitDtoResponse>(`${COIN_URL}/${id}/submit`, { method: 'post' });
        return TransformUtil.toClass(Coin, item);
    }

    // --------------------------------------------------------------------------
    //
    //  Coin Balance
    //
    // --------------------------------------------------------------------------

    public async coinBalanceGet(coinUid: string, objectUid: string): Promise<CoinBalance> {
        let item = await this.call<CoinBalance>(`${COIN_BALANCE_URL}/${coinUid}/${objectUid}`);
        return TransformUtil.toClass(CoinBalance, item);
    }

    public async coinBalanceList(data?: ICoinBalanceListDto): Promise<ICoinBalanceListDtoResponse> {
        let item = await this.call<ICoinBalanceListDtoResponse, ICoinBalanceListDto>(COIN_BALANCE_URL, { data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(CoinBalance, item.items);
        return item;
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

    public configGet(): Promise<IConfigDtoResponse> {
        return this.call<IConfigDtoResponse, void>(CONFIG_URL);
    }

    public entityGet(uid: string): Promise<IEntityGetDtoResponse> {
        return this.call<IEntityGetDtoResponse>(`${ENTITY_URL}/${uid}`);
    }

    public languageGet(project: string, locale: string, version?: string): Promise<any> {
        return this.call<any>(`${LANGUAGE_URL}/${project}/${locale}`, { data: { version } });
    }

    public async actionList(data?: IActionListDto): Promise<IActionListDtoResponse> {
        let item = await this.call<IActionListDtoResponse, IActionListDto>(ACTION_URL, { data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(Action, item.items);
        return item;
    }

    public async openIdResourcesGet(token: string, options?: OpenIdResourceValidationOptions): Promise<OpenIdResources> {
        let items = await this.call<Array<IOpenIdResource>>(OPEN_ID_GET_RESOURCES_URL, { data: { token, options }, method: 'post', isHandleLoading: false });

        let map = new Map();
        items.forEach(item => map.set(item.name, item));
        return map;
    }

    public async taxCompanyGet(value: string | number): Promise<ITaxCompanyGetDtoResponse> {
        let item = await this.call<ITaxCompanyGetDtoResponse>(`${TAX_COMPANY_URL}/${value}`);
        return TransformUtil.toClass(CompanyTaxDetails, item);
    }

    // --------------------------------------------------------------------------
    //
    //  Public Properties
    //
    // --------------------------------------------------------------------------

    public get isValid(): boolean {
        return !_.isNil(this.url);
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
export const COIN_URL = PREFIX + 'coin';
export const COMPANY_URL = PREFIX + 'company';
export const COIN_BALANCE_URL = PREFIX + 'coinBalance';

export const ACTION_URL = PREFIX + 'action';
export const ENTITY_URL = PREFIX + 'entity';

//
export const OPEN_ID_GET_RESOURCES_URL = 'api/openId/getResources';
export const OPEN_ID_LOGOUT_BY_REFRESH_TOKEN_URL = 'api/openId/logoutByRefreshToken';
export const OPEN_ID_GET_TOKEN_BY_REFRESH_TOKEN_URL = 'api/openId/getTokenByRefreshToken';
//

const SKIP_REFRESH_TOKEN_URLS = [
    LOGIN_URL,
    CONFIG_URL,
    LANGUAGE_URL,
    OPEN_ID_LOGOUT_BY_REFRESH_TOKEN_URL,
    OPEN_ID_GET_TOKEN_BY_REFRESH_TOKEN_URL
];
//
export const CUSTODY_URL = PREFIX + 'custody';




