import { IsEnum, IsOptional, IsDate, Length, Matches } from 'class-validator';
import { Type } from 'class-transformer';
import { LedgerCryptoKey } from '../cryptoKey';
import { RegExpUtil } from '../../util';
import * as _ from 'lodash';
import { LedgerRole } from '../role';
import { ILedgerObject } from '../ILedgerObject';

export enum LedgerUserStatus {
    ACTIVE = 'ACTIVE',
    NON_ACTIVE = 'NON_ACTIVE'
}

export class LedgerUser implements ILedgerObject {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static PREFIX = 'user';
    public static UID_REG_EXP = new RegExp(`^${LedgerUser.PREFIX}/${RegExpUtil.DATE_TIME}/${RegExpUtil.TRANSACTION_HASH}$`);

    private static MAX_CREATED_DATE = new Date(2500, 0);

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static createRoot(): LedgerUser {
        return LedgerUser.create(new Date(2000, 0), _.padStart('0', 64, '0'));
    }

    public static create(createdDate: Date, transactionHash: string): LedgerUser {
        let item = new LedgerUser();
        item.uid = LedgerUser.createUid(createdDate, transactionHash);
        item.createdDate = createdDate;
        return item;
    }

    private static createUid(createdDate: Date, transactionHash: string): string {
        let time = LedgerUser.MAX_CREATED_DATE.getTime() - createdDate.getTime();
        return `${LedgerUser.PREFIX}/${_.padStart(time.toString(), 14, '0')}/${transactionHash}`;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(LedgerUser.UID_REG_EXP)
    public uid: string;

    @IsEnum(LedgerUserStatus)
    public status: LedgerUserStatus;

    @Type(() => Date)
    @IsDate()
    public createdDate: Date;

    @Matches(RegExpUtil.DESCRIPTION_REG_EXP)
    public description: string;

    @IsOptional()
    @Type(() => LedgerCryptoKey)
    public cryptoKey?: LedgerCryptoKey;

    @IsEnum(LedgerRole, { each: true })
    public roles: Array<LedgerRole>;
}
