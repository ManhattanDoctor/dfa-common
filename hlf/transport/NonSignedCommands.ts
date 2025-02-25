import { CoinBalanceGetCommand, CoinGetCommand } from "@hlf-core/coin";
import { UserGetCommand } from "./UserGetCommand";
import { SeedGetCommand } from "./SeedGetCommand";

export const NON_SIGNED_COMMANDS: Array<string> = [
    CoinGetCommand.NAME,
    UserGetCommand.NAME,
    SeedGetCommand.NAME,
    CoinBalanceGetCommand.NAME
]