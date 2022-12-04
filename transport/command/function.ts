import { CoinAccountListCommand, CoinGetCommand, CoinListCommand, CoinObjectBalanceGetCommand, CoinRateGetCommand } from './coin';
import { CompanyCoinListCommand, CompanyGetCommand, CompanyListCommand, CompanyProjectListCommand, CompanyUserListCommand, CompanyUserRoleListCommand, CompanyVotingListCommand } from './company';
import { GenesisGetCommand } from './GenesisGetCommand';
import { ProjectGetCommand, ProjectUserListCommand, ProjectUserRoleListCommand } from './project';
import { UserCompanyListCommand, UserGetCommand, UserListCommand, UserProjectListCommand } from './user';
import { VotingGetCommand, VotingStepStateGetCommand, VotingListCommand } from './voting';

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

    CompanyGetCommand.NAME,
    CompanyListCommand.NAME,
    CompanyCoinListCommand.NAME,
    CompanyUserListCommand.NAME,
    CompanyVotingListCommand.NAME,
    CompanyProjectListCommand.NAME,
    CompanyUserRoleListCommand.NAME,

    ProjectGetCommand.NAME,
    ProjectUserListCommand.NAME,
    ProjectUserRoleListCommand.NAME,

    VotingGetCommand.NAME,
    VotingListCommand.NAME,
    VotingStepStateGetCommand.NAME,
]
