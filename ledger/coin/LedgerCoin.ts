import { getUid, IUIDable, UID } from "@ts-core/common";
import { IsString, IsInt, Min, IsNumberString, Matches, Length, IsOptional } from 'class-validator';
import * as _ from 'lodash';
import { RegExpUtil } from "../../util";
import { LedgerCompany } from "../company";
import { LedgerCoinId } from "./LedgerCoinId";

export class LedgerCoin implements IUIDable {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static PREFIX = 'coin';
    public static UID_REG_EXP = new RegExp(`^${LedgerCoin.PREFIX}/${LedgerCompany.UID_PATTERN}/[A-Z]{1,35}`);

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

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(LedgerCoin.UID_REG_EXP)
    public uid: string;

    @IsString()
    public coinId: LedgerCoinId;

    @IsInt()
    @Min(0)
    public decimals: number;

    @Matches(LedgerCompany.UID_REG_EXP)
    public companyUid: string;

    @IsOptional()
    @IsNumberString()
    public total?: string;

    @IsOptional()
    @IsNumberString()
    public emitted?: string;

    @IsOptional()
    @IsNumberString()
    public burned?: string;
}
