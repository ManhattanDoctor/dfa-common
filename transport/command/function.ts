import { CoinAccountListCommand, CoinGetCommand, CoinListCommand, CoinObjectBalanceGetCommand, CoinRateGetCommand } from './coin';
import { CoinBridgeGetCommand } from './coinBridge/CoinBridgeGetCommand';
import { CompanyCoinListCommand, CompanyGetCommand, CompanyRoleGetCommand, CompanyListCommand, CompanyProjectListCommand, CompanyUserListCommand, CompanyUserRoleListCommand } from './company';
import { GenesisGetCommand } from './GenesisGetCommand';
import { ProjectGetCommand, ProjectUserListCommand, ProjectUserRoleListCommand } from './project';
import { UserCompanyListCommand, UserGetCommand, UserListCommand, UserProjectListCommand } from './user';
import { VotingGetCommand, VotingStepStateGetCommand, VotingListCommand, VotingCompanyListCommand } from './voting';

export const NON_SIGNED_COMMANDS: Array<string> = [
    GenesisGetCommand.NAME,

    UserGetCommand.NAME,
    UserListCommand.NAME,
    UserCompanyListCommand.NAME,
    UserProjectListCommand.NAME,

    CoinGetCommand.NAME,
    CoinListCommand.NAME,
    CoinRateGetCommand.NAME,
    CoinAccountListCommand.NAME,
    CoinObjectBalanceGetCommand.NAME,

    CoinBridgeGetCommand.NAME,

    CompanyGetCommand.NAME,
    CompanyListCommand.NAME,
    CompanyRoleGetCommand.NAME,
    CompanyCoinListCommand.NAME,
    CompanyUserListCommand.NAME,

    CompanyProjectListCommand.NAME,
    CompanyUserRoleListCommand.NAME,

    ProjectGetCommand.NAME,
    ProjectUserListCommand.NAME,
    ProjectUserRoleListCommand.NAME,

    VotingGetCommand.NAME,
    VotingListCommand.NAME,
    VotingCompanyListCommand.NAME,
    VotingStepStateGetCommand.NAME,
]
