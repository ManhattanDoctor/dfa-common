import { ITraceable } from '@ts-core/common';
import { IPaginationBookmark, PaginableBookmark } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerProject } from '../../../ledger/project';

export class ProjectListCommand extends ChaincodeTransportCommandAsync<IProjectListDto, IProjectListDtoResponse> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.PROJECT_LIST;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IProjectListDto) {
        super(ProjectListCommand.NAME, request, null, true);
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(response: IProjectListDtoResponse): IProjectListDtoResponse {
        response.items = TransformUtil.toClassMany(LedgerProject, response.items);
        return response;
    }
}

export interface IProjectListDto extends PaginableBookmark<LedgerProject>, ITraceable {}
export interface IProjectListDtoResponse extends IPaginationBookmark<LedgerProject> {}
