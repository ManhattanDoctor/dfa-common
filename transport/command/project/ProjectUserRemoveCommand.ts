import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { Matches } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerProject } from '../../../ledger/project';
import { LedgerUser } from '../../../ledger/user';

export class ProjectUserRemoveCommand extends ChaincodeTransportCommandAsync<IProjectUserRemoveDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.PROJECT_USER_REMOVE;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IProjectUserRemoveDto) {
        super(ProjectUserRemoveCommand.NAME, TransformUtil.toClass(ProjectUserRemoveDto, request));
    }
}

export interface IProjectUserRemoveDto extends ITraceable {
    userUid: string;
    projectUid: string;
}

class ProjectUserRemoveDto implements IProjectUserRemoveDto {
    @Matches(LedgerUser.UID_REG_EXP)
    userUid: string;

    @Matches(LedgerProject.UID_REG_EXP)
    projectUid: string;
}
