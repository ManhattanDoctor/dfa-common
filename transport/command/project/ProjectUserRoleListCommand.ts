import { TransformUtil } from '@ts-core/common';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerUser } from '../../../ledger/user';
import { ITraceable } from '@ts-core/common';
import { Matches } from 'class-validator';
import { LedgerProject } from '../../../ledger/project';
import { LedgerProjectRole } from '../../../ledger/role';

export class ProjectUserRoleListCommand extends ChaincodeTransportCommandAsync<IProjectUserRoleListDto, IProjectUserRoleListDtoResponse> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.PROJECT_USER_ROLE_LIST;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IProjectUserRoleListDto) {
        super(ProjectUserRoleListCommand.NAME, TransformUtil.toClass(ProjectUserRoleListDto, request), null, true);
    }
}

export interface IProjectUserRoleListDto extends ITraceable {
    userUid: string;
    projectUid: string;
}

export type IProjectUserRoleListDtoResponse = Array<LedgerProjectRole>;

class ProjectUserRoleListDto implements IProjectUserRoleListDto {
    @Matches(LedgerUser.UID_REG_EXP)
    userUid: string;

    @Matches(LedgerProject.UID_REG_EXP)
    projectUid: string;
}
