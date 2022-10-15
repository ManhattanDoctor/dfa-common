import { IsEnum, IsDate, Matches } from 'class-validator';
import { Type } from 'class-transformer';
import { RegExpUtil } from '../../util';
import * as _ from 'lodash';
import { LedgerCompany } from '../company';
import { ILedgerObject } from '../ILedgerObject';

export enum LedgerProjectStatus {
    ACTIVE = 'ACTIVE',
    NON_ACTIVE = 'NON_ACTIVE'
}

export class LedgerProject implements ILedgerObject {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static PREFIX = 'project';
    public static UID_REG_EXP = new RegExp(`^${LedgerProject.PREFIX}/${RegExpUtil.DATE_TIME}/${RegExpUtil.TRANSACTION_HASH}$`);

    private static MAX_CREATED_DATE = new Date(2500, 0);

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static create(createdDate: Date, transactionHash: string): LedgerProject {
        let item = new LedgerProject();
        item.uid = LedgerProject.createUid(createdDate, transactionHash);
        item.createdDate = createdDate;
        return item;
    }

    private static createUid(createdDate: Date, transactionHash: string): string {
        let time = LedgerProject.MAX_CREATED_DATE.getTime() - createdDate.getTime();
        return `${LedgerProject.PREFIX}/${_.padStart(time.toString(), 14, '0')}/${transactionHash}`;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(LedgerProject.UID_REG_EXP)
    public uid: string;

    @Matches(LedgerCompany.UID_REG_EXP)
    public companyUid: string;

    @IsEnum(LedgerProjectStatus)
    public status: LedgerProjectStatus;

    @Matches(RegExpUtil.DESCRIPTION_REG_EXP)
    public description: string;

    @Type(() => Date)
    @IsDate()
    public createdDate: Date;
}

