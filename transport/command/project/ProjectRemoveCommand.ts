import { ITraceable } from '@ts-core/common';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerProject } from '../../../ledger/project';
import { Matches } from 'class-validator';
import { TransformUtil } from '@ts-core/common';

export class ProjectRemoveCommand extends ChaincodeTransportCommandAsync<IProjectRemoveDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.PROJECT_REMOVE;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IProjectRemoveDto) {
        super(ProjectRemoveCommand.NAME, TransformUtil.toClass(ProjectRemoveDto, request));
    }
}

export interface IProjectRemoveDto extends ITraceable {
    uid: string;
}

class ProjectRemoveDto implements IProjectRemoveDto {
    @Matches(LedgerProject.UID_REG_EXP)
    uid: string;
}
