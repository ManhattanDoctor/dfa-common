import { TransformUtil } from '@ts-core/common';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { ILedgerPaymentDetails, LedgerPaymentDetails } from '../../../ledger/payment';
import { ITraceable } from '@ts-core/common';
import { Type } from 'class-transformer';
import { IsString, Matches, IsNumberString, IsDefined, ValidateNested } from 'class-validator';
import { LedgerCoin } from '../../../ledger/coin';
import { LedgerVoting } from '../../../ledger/voting';

export class CoinBurnCommand extends ChaincodeTransportCommandAsync<ICoinBurnDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COIN_BURN;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinBurnDto) {
        super(CoinBurnCommand.NAME, TransformUtil.toClass(CoinBurnDto, request));
    }
}

export interface ICoinBurnDto extends ITraceable {
    amount: string;
    coinUid: string;
    objectUid: string;
    votingUid: string;
}

export class CoinBurnDto implements ICoinBurnDto {
    @IsString()
    objectUid: string;

    @IsNumberString()
    amount: string;

    @Matches(LedgerCoin.UID_REG_EXP)
    coinUid: string;

    @Matches(LedgerVoting.UID_REG_EXP)
    votingUid: string;
}
