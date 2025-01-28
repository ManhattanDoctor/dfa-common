import { HlfTransportCommandAsync } from '@hlf-core/common';
import { CommandName } from './Command';

export class TestCommand extends HlfTransportCommandAsync<void, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = CommandName.TEST;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor() {
        super(TestCommand.NAME);
    }
}