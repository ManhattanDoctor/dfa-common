import { getUid, IUIDable, UID } from "@ts-core/common";
import { IsInt, Min, Matches } from 'class-validator';
import { Type } from 'class-transformer';
import { LedgerCoinId } from "./LedgerCoinId";
import { LedgerCompany } from "../company/LedgerCompany";
import { LedgerCoinBalance } from "./LedgerCoinBalance";
import * as _ from 'lodash';

export class LedgerCoin implements IUIDable {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static PREFIX = 'coin';
    public static COIN_ID_PATTERN = `[A-Z]{1,35}`;

    public static UID_REG_EXP = new RegExp(`^${LedgerCoin.PREFIX}/${LedgerCompany.UID_PATTERN}/${LedgerCoin.COIN_ID_PATTERN}$`);
    public static COIN_ID_REG_EXP = new RegExp(`^${LedgerCoin.COIN_ID_PATTERN}$`);

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static create(company: UID, coinId: string, decimals: number): LedgerCoin {
        let item = new LedgerCoin();
        item.uid = LedgerCoin.createUid(company, coinId);
        item.coinId = coinId;
        item.decimals = decimals;
        item.companyUid = getUid(company);
        return item;
    }

    public static createUid(company: UID, coinId: string): string {
        return `${LedgerCoin.PREFIX}/${getUid(company)}/${coinId}`;
    }

    public static getCoinId(coin: UID): LedgerCoinId {
        let uid = getUid(coin);
        return !_.isNil(uid) ? uid.split('/')[2] : null;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(LedgerCoin.UID_REG_EXP)
    public uid: string;

    @Matches(LedgerCoin.COIN_ID_REG_EXP)
    public coinId: LedgerCoinId;

    @IsInt()
    @Min(0)
    public decimals: number;

    @Matches(LedgerCompany.UID_REG_EXP)
    public companyUid: string;

    @Type(() => LedgerCoinBalance)
    public balance: LedgerCoinBalance;
}
