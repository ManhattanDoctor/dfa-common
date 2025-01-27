import { ILogger, TransformUtil, TraceUtil, TransportHttp, ITransportHttpSettings, ITraceable, TransportHttpCommandAsync, DateUtil } from '@ts-core/common';
import { IInitDto, IInitDtoResponse, ILoginDto, ILoginDtoResponse } from './login';
import { User } from '../user';
import { Coin, CoinBalance } from '../coin';
import { IUserGetDtoResponse, IUserEditDto, IUserEditDtoResponse } from '../api/user';
import { ICoinBalanceListDto, ICoinBalanceListDtoResponse, ICoinGetDtoResponse, ICoinListDto, ICoinListDtoResponse } from './coin';
import { ILedgerActionListDto, ILedgerActionListDtoResponse, ILedgerObjectDetailsGetDto, ILedgerObjectDetailsGetDtoResponse } from './ledger';
import { LedgerAction } from '../LedgerAction';
import * as _ from 'lodash';

export class Client extends TransportHttp<ITransportHttpSettings> {
    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static totp(): Promise<string> {
        let window = 5 * DateUtil.MILLISECONDS_MINUTE;
        return Promise.resolve(`Login data is "${Math.floor(Date.now() / window)}"`);
    }

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(logger: ILogger, url?: string) {
        super(logger, { method: 'get', baseURL: url, isHandleError: true, isHandleLoading: true, headers: {} });
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
    //  User Methods
    //
    // --------------------------------------------------------------------------

    public async userGet(id: number): Promise<IUserGetDtoResponse> {
        let item = await this.call<User>(`${USER_URL}/${id}`);
        return TransformUtil.toClass(User, item);
    }

    public async userEdit(data: IUserEditDto): Promise<IUserEditDtoResponse> {
        let item = await this.call<IUserEditDtoResponse, IUserEditDto>(`${USER_URL}/${data.id}`, { method: 'put', data });
        return TransformUtil.toClass(User, item);
    }

    public async userSearch(value: string): Promise<Array<User>> {
        let items = await this.call<Array<User>>(`${USER_SEARCH_URL}/${!_.isNil(value) ? value : ''}`);
        return TransformUtil.toClassMany(User, items);
    }

    // --------------------------------------------------------------------------
    //
    //  Coin Methods
    //
    // --------------------------------------------------------------------------

    public async coinGet(id: number): Promise<ICoinGetDtoResponse> {
        let item = await this.call<Coin>(`${COIN_URL}/${id}`);
        return TransformUtil.toClass(Coin, item);
    }

    public async coinList(data?: ICoinListDto): Promise<ICoinListDtoResponse> {
        let item = await this.call<ICoinListDtoResponse, ICoinListDto>(COIN_URL, { data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(Coin, item.items);
        return item;
    }

    public async coinBalanceList(data?: ICoinBalanceListDto): Promise<ICoinBalanceListDtoResponse> {
        let item = await this.call<ICoinBalanceListDtoResponse, ICoinBalanceListDto>(COIN_BALANCE_URL, { data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(CoinBalance, item.items);
        return item;
    }

    public async coinBalanceGet(coinId: string, objectUid: string, isHandleError: boolean = true): Promise<CoinBalance> {
        let item = await this.sendListen(new TransportHttpCommandAsync(`${COIN_BALANCE_URL}/${coinId}`, { data: TraceUtil.addIfNeed({ objectUid }), isHandleError }));
        return TransformUtil.toClass(CoinBalance, item);
    }

    //--------------------------------------------------------------------------
    //
    // 	Ledger Methods
    //
    //--------------------------------------------------------------------------

    public async ledgerActionList(data?: ILedgerActionListDto): Promise<ILedgerActionListDtoResponse> {
        let item = await this.call<ILedgerActionListDtoResponse, ILedgerActionListDto>(LEDGER_ACTION_URL, { data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(LedgerAction, item.items);
        return item;
    }

    public async ledgerObjectDetailsGet(ledgerUid: string): Promise<ILedgerObjectDetailsGetDtoResponse> {
        return this.call<ILedgerObjectDetailsGetDtoResponse, ILedgerObjectDetailsGetDto>(`${LEDGER_OBJECT_DETAILS_URL}`, { data: TraceUtil.addIfNeed({ ledgerUid }) });
    }

    //--------------------------------------------------------------------------
    //
    // 	Public Properties
    //
    //--------------------------------------------------------------------------

    public set sid(value: string) {
        if (!_.isNil(this.headers)) {
            this.headers.Authorization = `Bearer ${value}`;
        }
    }
}

const PREFIX = 'api/';

export const USER_URL = PREFIX + 'user';
export const USER_SEARCH_URL = PREFIX + 'userSearch';

export const COIN_URL = PREFIX + 'coin';
export const COIN_BALANCE_URL = PREFIX + 'coinBalance';

export const INIT_URL = PREFIX + 'init';
export const LOGIN_URL = PREFIX + 'login';
export const LOGOUT_URL = PREFIX + 'logout';

export const LEDGER_ACTION_URL = PREFIX + 'ledgerAction';
export const LEDGER_OBJECT_DETAILS_URL = PREFIX + 'ledgerObjectDetails';
