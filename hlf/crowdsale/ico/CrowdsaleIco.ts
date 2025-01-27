

import { IsDefined, ValidateNested, IsOptional, Matches, IsBoolean, IsNumberString } from 'class-validator';
import { Type } from 'class-transformer';
import { UID } from '@ts-core/common';
import { Crowdsale, CrowdsaleType } from '../Crowdsale';
import { CoinUtil } from '@hlf-core/coin';
import * as _ from 'lodash';

export class CrowdsaleIco extends Crowdsale<CrowdsaleIcoProposal> {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsDefined()
    @Type(() => CrowdsaleIcoProposal)
    @ValidateNested()
    public proposal: CrowdsaleIcoProposal;

    // --------------------------------------------------------------------------
    //
    //  Public Properties
    //
    // --------------------------------------------------------------------------

    constructor() {
        super();
        this.type = CrowdsaleType.ICO;
    }
}

export class CrowdsaleIcoProposal {
    @Matches(CoinUtil.OWNER_UID_REG_EXP)
    public owner: UID;

    @Matches(CoinUtil.COIN_ID_REG_EXP)
    public coinId: string;

    @Matches(CoinUtil.DECIMALS_UID_REG_EXP)
    public decimals: number;
}

export class CrowdsaleIcoProposalDetails {
    @IsOptional()
    @IsBoolean()
    public isEmittable?: number;
}

