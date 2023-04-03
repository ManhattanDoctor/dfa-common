import { TransportHttp, ITransportHttpSettings, ITraceable, TransportHttpCommandAsync } from '@ts-core/common';
import { ILogger } from '@ts-core/common';
import * as _ from 'lodash';
import { TraceUtil } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { IInitDto, IInitDtoResponse, ILoginDto, ILoginDtoResponse } from './login';
import { User, UserCompany, UserProject } from '../user';
import { Coin, CoinBalance } from '../coin';
import { IUserGetDtoResponse, IUserEditDto, IUserEditDtoResponse } from '../api/user';
import { IProjectEditDto, IProjectEditDtoResponse, IProjectGetDtoResponse, IProjectListDto, IProjectListDtoResponse, IProjectUserListDto, IProjectUserListDtoResponse, IProjectUserRoleGetDtoResponse, IProjectUserRoleSetDto, IProjectUserRoleSetDtoResponse } from './project';
import { LedgerProjectRole } from '../../ledger/role';
import { ProjectUser } from '../project';
import { ICoinBalanceListDto, ICoinBalanceListDtoResponse, ICoinExchangeDto, ICoinExchangeGetDto, ICoinExchangeGetDtoResponse, ICoinGetDtoResponse, ICoinListDto, ICoinListDtoResponse, ICoinWithdrawDto, ICoinWithdrawDtoResponse } from './coin';
import { ICompanyGetDtoResponse, ICompanyUserListDto, ICompanyUserListDtoResponse } from './company';
import { CompanyUser } from '../company';
import { VotingCompany } from '../voting/company';
import { IVotingAddDto, IVotingGetDtoResponse, IVotingListDto, IVotingListDtoResponse, IVotingVoteDto } from './voting';
import { IVotingAddDtoResponse } from './voting';
import { LedgerCoinId } from '../../ledger/coin';
import { IVotingVoteListDto, IVotingVoteListDtoResponse } from './voting';
import { VotingVote } from '../voting';
import { ILedgerActionListDto, ILedgerActionListDtoResponse, ILedgerObjectDetailsGetDto, ILedgerObjectDetailsGetDtoResponse } from './ledger';
import { LedgerAction } from '../LedgerAction';

export class Client extends TransportHttp<ITransportHttpSettings> {
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
        item.company = TransformUtil.toClass(UserCompany, item.company);
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
    //  Company Methods
    //
    // --------------------------------------------------------------------------

    public async companyGet(id: number): Promise<ICompanyGetDtoResponse> {
        let item = await this.call<UserCompany>(`${COMPANY_URL}/${id}`);
        return TransformUtil.toClass(UserCompany, item);
    }

    public async companyUserList(data?: ICompanyUserListDto, id?: number): Promise<ICompanyUserListDtoResponse> {
        let item = await this.call<ICompanyUserListDtoResponse, ICompanyUserListDto>(`${COMPANY_URL}/${id}/user`, { data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(CompanyUser, item.items);
        return item;
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

    public async coinExchange(data?: ICoinExchangeDto): Promise<void> {
        return this.call<void, ICoinExchangeDto>(COIN_EXCHANGE_URL, { data: TraceUtil.addIfNeed(data), method: 'post' });
    }

    public async coinExchangeGet(data: ICoinExchangeGetDto): Promise<ICoinExchangeGetDtoResponse> {
        let item = await this.call<ICoinExchangeGetDtoResponse, ICoinExchangeGetDto>(COIN_EXCHANGE_URL, { data: TraceUtil.addIfNeed(data) });
        item.to = TransformUtil.toClass(CoinBalance, item.to);
        item.from = TransformUtil.toClass(CoinBalance, item.from);
        return item;
    }

    public async coinBalanceList(data?: ICoinBalanceListDto): Promise<ICoinBalanceListDtoResponse> {
        let item = await this.call<ICoinBalanceListDtoResponse, ICoinBalanceListDto>(COIN_BALANCE_URL, { data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(CoinBalance, item.items);
        return item;
    }

    public async coinBalanceGet(coinId: LedgerCoinId, objectUid: string, isHandleError: boolean = true): Promise<CoinBalance> {
        let item = await this.sendListen(new TransportHttpCommandAsync(`${COIN_BALANCE_URL}/${coinId}`, { data: TraceUtil.addIfNeed({ objectUid }), isHandleError }));
        return TransformUtil.toClass(CoinBalance, item);
    }

    public async coinWithdraw(data: ICoinWithdrawDto): Promise<ICoinWithdrawDtoResponse> {
        return this.call<ICoinWithdrawDtoResponse, ICoinWithdrawDto>(COIN_WITHDRAW_URL, { data: TraceUtil.addIfNeed(data), method: 'post' });
    }

    // --------------------------------------------------------------------------
    //
    //  Voting Methods
    //
    // --------------------------------------------------------------------------

    public async votingGet(id: number): Promise<IVotingGetDtoResponse> {
        let item = await this.call<VotingCompany>(`${VOTING_URL}/${id}`);
        return TransformUtil.toClass(VotingCompany, item);
    }

    public async votingVote(data: IVotingVoteDto): Promise<void> {
        return this.call<void>(VOTING_VOTE_URL, { data: TraceUtil.addIfNeed(data), method: 'post' });
    }

    public async votingAdd(data: IVotingAddDto): Promise<IVotingAddDtoResponse> {
        let item = await this.call<IVotingAddDtoResponse>(VOTING_URL, { data: TraceUtil.addIfNeed(data), method: 'post' });
        return item;
    }

    public async votingList(data?: IVotingListDto): Promise<IVotingListDtoResponse> {
        let item = await this.call<IVotingListDtoResponse, IVotingListDto>(VOTING_URL, { data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(VotingCompany, item.items);
        return item;
    }

    public async votingVoteList(data?: IVotingVoteListDto, stepId?: number): Promise<IVotingVoteListDtoResponse> {
        let item = await this.call<IVotingVoteListDtoResponse, IVotingVoteListDto>(`${VOTING_URL}/${stepId}/vote`, { data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(VotingVote, item.items);
        return item;
    }

    // --------------------------------------------------------------------------
    //
    //  Project Methods
    //
    // --------------------------------------------------------------------------

    public async projectEdit(data: IProjectEditDto): Promise<IProjectEditDtoResponse> {
        let item = await this.call<IProjectEditDtoResponse, IProjectEditDto>(`${PROJECT_URL}/${data.id}`, { method: 'put', data });
        return TransformUtil.toClass(UserProject, item);
    }

    public async projectGet(id: number): Promise<IProjectGetDtoResponse> {
        let item = await this.call<UserProject>(`${PROJECT_URL}/${id}`);
        return TransformUtil.toClass(UserProject, item);
    }

    public async projectList(data?: IProjectListDto): Promise<IProjectListDtoResponse> {
        let item = await this.call<IProjectListDtoResponse, IProjectListDto>(PROJECT_URL, { data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(UserProject, item.items);
        return item;
    }

    public async projectUserList(data?: IProjectUserListDto, id?: number): Promise<IProjectUserListDtoResponse> {
        let item = await this.call<IProjectUserListDtoResponse, IProjectUserListDto>(`${PROJECT_URL}/${id}/user`, { data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(ProjectUser, item.items);
        return item;
    }

    public async projectUserRoleGet(projectId: number, userId: number): Promise<IProjectUserRoleGetDtoResponse> {
        let item = await this.call<IProjectUserRoleGetDtoResponse, void>(`${PROJECT_URL}/${projectId}/role/${userId}`);
        return item;
    }

    public async projectUserRoleSet(projectId: number, userId: number, data: Array<LedgerProjectRole>): Promise<IProjectUserRoleSetDtoResponse> {
        let item = await this.call<IProjectUserRoleSetDtoResponse, IProjectUserRoleSetDto>(`${PROJECT_URL}/${projectId}/role/${userId}`, { data, method: 'post' });
        return item;
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
export const COMPANY_URL = PREFIX + 'company';

export const VOTING_URL = PREFIX + 'voting';
export const VOTING_VOTE_URL = PREFIX + 'votingVote';

export const COIN_URL = PREFIX + 'coin';
export const COIN_BALANCE_URL = PREFIX + 'coinBalance';
export const COIN_WITHDRAW_URL = PREFIX + 'coinWithdraw';
export const COIN_EXCHANGE_URL = PREFIX + 'coinExchange';

export const PROJECT_URL = PREFIX + 'project';

export const INIT_URL = PREFIX + 'init';
export const LOGIN_URL = PREFIX + 'login';
export const LOGOUT_URL = PREFIX + 'logout';

export const LEDGER_ACTION_URL = PREFIX + 'ledgerAction';
export const LEDGER_OBJECT_DETAILS_URL = PREFIX + 'ledgerObjectDetails';
