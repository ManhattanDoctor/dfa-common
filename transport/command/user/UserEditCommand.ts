import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { LedgerUser } from '../../../ledger/user';
import { Length, IsOptional, IsEnum, Matches } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { RegExpUtil, ValidateUtil } from '../../../util';
import { LedgerRole } from '../../../ledger/role';

export class UserEditCommand extends ChaincodeTransportCommandAsync<IUserEditDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.USER_EDIT;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IUserEditDto) {
        super(UserEditCommand.NAME, TransformUtil.toClass(UserEditDto, request));
    }
}

export interface IUserEditDto extends ITraceable {
    uid: string;
    roles?: Array<LedgerRole>;
    description?: string;
}

class UserEditDto implements IUserEditDto {
    @Matches(LedgerUser.UID_REG_EXP)
    uid: string;

    @IsOptional()
    @IsEnum(LedgerRole, { each: true })
    roles?: Array<LedgerRole>;

    @IsOptional()
    @Matches(RegExpUtil.DESCRIPTION_REG_EXP)
    description?: string;
}
