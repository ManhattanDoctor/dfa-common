import { LedgerCoinId } from "../../ledger/coin";

export class CoinBalance {
    coinId: LedgerCoinId;
    decimals: number;
    companyId: number;
    ledgerUid: string;

    held: string;
    inUse: string;
    total: string;
}