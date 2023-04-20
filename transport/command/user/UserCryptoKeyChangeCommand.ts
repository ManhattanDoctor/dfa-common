import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { LedgerUser } from '../../../ledger/user';
import { IsDefined, ValidateNested, Matches } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { IUserCryptoKey, UserCryptoKey } from './UserAddCommand';
import { Type } from 'class-transformer';

export class UserCryptoKeyChangeCommand extends ChaincodeTransportCommandAsync<IUserCryptoKeyChangeDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.USER_CRYPTO_KEY_CHANGE;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IUserCryptoKeyChangeDto) {
        super(UserCryptoKeyChangeCommand.NAME, TransformUtil.toClass(UserCryptoKeyChangeDto, request));
    }
}

export interface IUserCryptoKeyChangeDto extends ITraceable {
    uid: string;
    cryptoKey: IUserCryptoKey;
}

class UserCryptoKeyChangeDto implements IUserCryptoKeyChangeDto {
    @Matches(LedgerUser.UID_REG_EXP)
    uid: string;

    @IsDefined()
    @Type(() => UserCryptoKey)
    @ValidateNested()
    cryptoKey: UserCryptoKey;
}
