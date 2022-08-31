
import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { LedgerUser } from '../../../ledger/user';
import { Matches } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';

export class UserRemoveCommand extends ChaincodeTransportCommandAsync<IUserRemoveDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.USER_REMOVE;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IUserRemoveDto) {
        super(UserRemoveCommand.NAME, TransformUtil.toClass(UserRemoveDto, request));
    }
}

export interface IUserRemoveDto extends ITraceable {
    uid: string;
}

class UserRemoveDto implements IUserRemoveDto {
    @Matches(LedgerUser.UID_REG_EXP)
    uid: string;
}
