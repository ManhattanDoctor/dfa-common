import { IsEnum, IsDate, IsArray, ValidateNested, Matches, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { RegExpUtil } from '../../util/RegExpUtil';
import * as _ from 'lodash';
import { ILedgerObject } from '../ILedgerObject';
import { LedgerCompanyRegulation } from './LedgerCompanyRegulation';

export enum LedgerCompanyStatus {
    ACTIVE = 'ACTIVE',
    NON_ACTIVE = 'NON_ACTIVE'
}

export class LedgerCompany implements ILedgerObject {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static PREFIX = 'company';
    public static UID_PATTERN = `${LedgerCompany.PREFIX}/${RegExpUtil.DATE_TIME}/${RegExpUtil.TRANSACTION_HASH}`;

    private static MAX_CREATED_DATE = new Date(2500, 0);
    public static UID_REG_EXP = new RegExp(`^${LedgerCompany.UID_PATTERN}$`);

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static createRoot(): LedgerCompany {
        return LedgerCompany.create(new Date(2000, 0), _.padStart('0', 64, '0'));
    }
    
    public static create(createdDate: Date, transactionHash: string): LedgerCompany {
        let item = new LedgerCompany();
        item.uid = LedgerCompany.createUid(createdDate, transactionHash);
        item.createdDate = createdDate;
        return item;
    }

    private static createUid(createdDate: Date, transactionHash: string): string {
        let time = LedgerCompany.MAX_CREATED_DATE.getTime() - createdDate.getTime();
        return `${LedgerCompany.PREFIX}/${_.padStart(time.toString(), 14, '0')}/${transactionHash}`;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(LedgerCompany.UID_REG_EXP)
    public uid: string;

    @IsEnum(LedgerCompanyStatus)
    public status: LedgerCompanyStatus;

    @Type(() => Date)
    @IsDate()
    public createdDate: Date;

    @IsOptional()
    @Matches(RegExpUtil.DESCRIPTION_REG_EXP)
    public description?: string;

    @IsOptional()
    @IsArray()
    @Type(() => LedgerCompanyRegulation)
    @ValidateNested({ each: true })
    public regulations?: Array<LedgerCompanyRegulation>;
}
