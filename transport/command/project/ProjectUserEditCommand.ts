import { TransformUtil } from '@ts-core/common';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { ProjectUserAddDto, IProjectUserAddDto } from './ProjectUserAddCommand';

export class ProjectUserEditCommand extends ChaincodeTransportCommandAsync<IProjectUserAddDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.PROJECT_USER_EDIT;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IProjectUserAddDto) {
        super(ProjectUserEditCommand.NAME, TransformUtil.toClass(ProjectUserAddDto, request));
    }
}
