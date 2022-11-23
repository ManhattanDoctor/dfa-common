import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerProject } from '../../../ledger/project';
import { Matches, } from 'class-validator';
import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { RegExpUtil } from '../../../util';
import { LedgerCompany } from '../../../ledger/company';
import { LedgerUser } from '../../../ledger/user';

export class ProjectAddCommand extends ChaincodeTransportCommandAsync<IProjectAddDto, LedgerProject> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.PROJECT_ADD;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IProjectAddDto) {
        super(ProjectAddCommand.NAME, TransformUtil.toClass(ProjectAddDto, request));
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: LedgerProject): LedgerProject {
        return TransformUtil.toClass(LedgerProject, item);
    }
}

export interface IProjectAddDto extends ITraceable {
    ownerUid: string;
    companyUid: string;
    description: string;
}

export class ProjectAddDto implements IProjectAddDto {
    @Matches(LedgerUser.UID_REG_EXP)
    ownerUid: string;

    @Matches(LedgerCompany.UID_REG_EXP)
    companyUid: string;

    @Matches(RegExpUtil.DESCRIPTION_REG_EXP)
    description: string;
}
