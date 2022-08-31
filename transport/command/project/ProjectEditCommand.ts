import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerProject } from '../../../ledger/project';
import { ITraceable } from '@ts-core/common';
import { Length, IsOptional, Matches } from 'class-validator';
import { RegExpUtil, ValidateUtil } from '../../../util';
import { TransformUtil } from '@ts-core/common';

export class ProjectEditCommand extends ChaincodeTransportCommandAsync<IProjectEditDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.PROJECT_EDIT;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IProjectEditDto) {
        super(ProjectEditCommand.NAME, TransformUtil.toClass(ProjectEditDto, request));
    }
}

export interface IProjectEditDto extends ITraceable {
    uid: string;
    description?: string;
}

class ProjectEditDto implements IProjectEditDto {
    @Matches(LedgerProject.UID_REG_EXP)
    uid: string;

    @IsOptional()
    @Matches(RegExpUtil.DESCRIPTION_REG_EXP)
    description?: string;
}
