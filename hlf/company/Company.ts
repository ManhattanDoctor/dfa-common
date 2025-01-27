import { IsEnum, Length, IsDate, Matches, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { IUIDable } from '@ts-core/common';
import * as _ from 'lodash';

export enum CompanyStatus {
    ACTIVE = 'ACTIVE',
    NON_ACTIVE = 'NON_ACTIVE'
}

export class Company implements IUIDable {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static PREFIX = 'company';
    public static UID_REG_EXP = new RegExp(`^${Company.PREFIX}/[0-9]{14}/[0-9a-fA-F]{64}$`);
    public static DESCRIPTION_REG_EXP = new RegExp(`^[A-Za-zА-Яа-я0-9 .\-\/]*$`);

    public static DESCRIPTION_MIN_LENGTH = 0;
    public static DESCRIPTION_MAX_LENGTH = 1024;

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static create(created: Date, hash: string): Company {
        let item = new Company();
        item.uid = Company.createUid(created, hash);
        item.created = created;
        return item;
    }

    private static createUid(created: Date, hash: string): string {
        return `${Company.PREFIX}/${_.padStart(created.getTime().toString(), 14, '0')}/${hash}`;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(Company.UID_REG_EXP)
    public uid: string;

    @IsEnum(CompanyStatus)
    public status: CompanyStatus;

    @Type(() => Date)
    @IsDate()
    public created: Date;

    @IsOptional()
    @Length(Company.DESCRIPTION_MIN_LENGTH, Company.DESCRIPTION_MAX_LENGTH)
    @Matches(Company.DESCRIPTION_REG_EXP)
    public description?: string;
}
