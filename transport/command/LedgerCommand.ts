import { TransportCommandAsync, TransportCommand } from '@ts-core/common';
import * as _ from 'lodash';

export enum LedgerCommand {
    USER_GET = 'DAO:UserGet',
    USER_ADD = 'DAO:UserAdd',
    USER_LIST = 'DAO:UserList',
    USER_EDIT = 'DAO:UserEdit',
    USER_REMOVE = 'DAO:UserRemove',
    USER_COMPANY_LIST = 'DAO:UserCompanyList',
    USER_PROJECT_LIST = 'DAO:UserProjectList',
    USER_CRYPTO_KEY_CHANGE = 'DAO:UserCryptoKeyChange',

    COMPANY_GET = 'DAO:CompanyGet',
    COMPANY_ADD = 'DAO:CompanyAdd',
    COMPANY_LIST = 'DAO:CompanyList',
    COMPANY_EDIT = 'DAO:CompanyEdit',
    COMPANY_REMOVE = 'DAO:CompanyRemove',
    COMPANY_PROJECT_LIST = 'DAO:CompanyProjectList',
    COMPANY_USER_SET = 'DAO:CompanyUserSet',
    COMPANY_USER_LIST = 'DAO:CompanyUserList',
    COMPANY_COIN_LIST = 'DAO:CompanyCoinList',
    COMPANY_USER_EDIT = 'DAO:CompanyUserEdit',
    COMPANY_ROLE_GET = 'DAO:CompanyRoleGetCommand',
    COMPANY_USER_ROLE_LIST = 'DAO:CompanyUserRoleList',

    VOTING_GET = 'DAO:VotingGet',
    VOTING_LIST = 'DAO:VotingList',
    VOTING_VOTE = 'DAO:VotingVote',
    VOTING_CHECK = 'DAO:VotingCheck',
    VOTING_COMPANY_ADD = 'DAO:VotingAddCompany',
    VOTING_COMPANY_LIST = 'DAO:VotingCompanyList',
    VOTING_STEP_STATE_GET = 'DAO:VotingStepStateGet',

    COIN_GET = 'DAO:CoinGet',
    COIN_ADD = 'DAO:CoinAdd',
    COIN_EMIT = 'DAO:CoinEmit',
    COIN_LIST = 'DAO:CoinList',
    COIN_BURN = 'DAO:CoinBurn',
    COIN_HOLD = 'DAO:CoinHold',
    COIN_UNHOLD = 'DAO:CoinUnhold',
    COIN_REMOVE = 'DAO:CoinRemove',
    COIN_RATE_GET = 'DAO:CoinRateGet',
    COIN_EXCHANGE = 'DAO:CoinExchange',
    COIN_TRANSFER = 'DAO:CoinTransfer',
    COIN_ACCOUNT_LIST = 'DAO:CoinAccountList',
    COIN_OBJECT_BALANCE_GET = 'DAO:CoinObjectBalanceGet',

    COIN_BRIDGE_GET = 'DAO:CoinBridgeGet',
    COIN_BRIDGE_CHECK = 'DAO:CoinBridgeCheck',

    PROJECT_GET = 'DAO:ProjectGet',
    PROJECT_ADD = 'DAO:ProjectAdd',
    PROJECT_LIST = 'DAO:ProjectList',
    PROJECT_EDIT = 'DAO:ProjectEdit',
    PROJECT_REMOVE = 'DAO:ProjectRemove',
    PROJECT_USER_ADD = 'DAO:ProjectUserAdd',
    PROJECT_USER_LIST = 'DAO:ProjectUserList',
    PROJECT_USER_EDIT = 'DAO:ProjectUserEdit',
    PROJECT_USER_IS_IN = 'DAO:ProjectUserIsIn',
    PROJECT_USER_REMOVE = 'DAO:ProjectUserRemove',
    PROJECT_USER_ROLE_LIST = 'DAO:ProjectUserRoleList',

    GENESIS_GET = 'DAO:GenesisGet'
}

export class ChaincodeTransportCommand<T> extends TransportCommand<T> {
    constructor(name: LedgerCommand, request?: T, id?: string, public isReadonly?: boolean) {
        super(name, request, id);
        this.isReadonly = isReadonly;
    }
}

export class ChaincodeTransportCommandAsync<U, V> extends TransportCommandAsync<U, V> {
    constructor(name: LedgerCommand, request?: U, id?: string, public isReadonly?: boolean) {
        super(name, request, id);
        this.isReadonly = isReadonly;
    }
}
