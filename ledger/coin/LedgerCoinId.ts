export type LedgerCoinId = LedgerCoinIdPreset | string;

export enum LedgerCoinIdPreset {
    VOTE = 'VOTE',
    
    RUB = 'RUB',
    USD = 'USD',
    EUR = 'EUR',
    ETH = 'ETH',
}
