import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { Matches, IsOptional, IsEnum } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerProject } from '../../../ledger/project';
import { LedgerUser } from '../../../ledger/user';
import { LedgerProjectRole } from '../../../ledger/role';

export class ProjectUserAddCommand extends ChaincodeTransportCommandAsync<IProjectUserAddDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.PROJECT_USER_ADD;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IProjectUserAddDto) {
        super(ProjectUserAddCommand.NAME, TransformUtil.toClass(ProjectUserAddDto, request));
    }
}

export interface IProjectUserAddDto {
    roles: Array<LedgerProjectRole>;
    userUid: string;
    projectUid: string;
}

// export needs because another command use it
export class ProjectUserAddDto implements IProjectUserAddDto {
    @Matches(LedgerUser.UID_REG_EXP)
    userUid: string;

    @Matches(LedgerProject.UID_REG_EXP)
    projectUid: string;

    @IsOptional()
    @IsEnum(LedgerProjectRole, { each: true })
    roles: Array<LedgerProjectRole>;
}
