import { LedgerCoinId } from "../../ledger/coin";

export class CoinBalance {
    id: number;
    coinUid: string;
    objectUid: string;

    coinId: LedgerCoinId;
    decimals: number;
    companyId: number;

    held: string;
    inUse: string;
    total: string;
}