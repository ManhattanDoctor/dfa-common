
import { TransformUtil } from '@ts-core/common';
import { HlfTransportCommandAsync } from '@hlf-core/common';
import { ISeed, Seed } from '../Seed';
import { CommandName } from './Command';

export class SeedGetCommand extends HlfTransportCommandAsync<void, ISeed> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = CommandName.SEED_GET;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor() {
        super(SeedGetCommand.NAME, null, null, true);
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: ISeed): ISeed {
        return TransformUtil.toClass(Seed, item);
    }
}