import { LedgerCommand, ChaincodeTransportCommandAsync } from './LedgerCommand';
import { IGenesis } from '../../ledger';
import { LedgerUser } from '../../ledger/user';
import { TransformUtil } from '@ts-core/common';
import { Matches, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { LedgerCompany } from '../../ledger/company';

export class GenesisGetCommand extends ChaincodeTransportCommandAsync<void, IGenesis> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.GENESIS_GET;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor() {
        super(GenesisGetCommand.NAME, null, null, true);
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: IGenesis): IGenesis {
        return TransformUtil.toClass(Genesis, item);
    }
}

export class Genesis implements IGenesis {
    @Matches(LedgerUser.UID_REG_EXP)
    rootUserUid: string;

    @Type(() => Date)
    @IsDate()
    createdDate: Date;
}
