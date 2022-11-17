import { TransformUtil } from '@ts-core/common';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { ILedgerPaymentDetails, LedgerPaymentDetails } from '../../../ledger/payment';
import { ITraceable } from '@ts-core/common';
import { Type } from 'class-transformer';
import { IsString, Matches, IsNumberString, IsDefined, ValidateNested } from 'class-validator';
import { LedgerCoin } from '../../../ledger/coin';

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
    details: ILedgerPaymentDetails;
    objectUid: string;
}

export class CoinBurnDto implements ICoinBurnDto {
    @IsString()
    objectUid: string;

    @IsNumberString()
    amount: string;

    @Matches(LedgerCoin.UID_REG_EXP)
    coinUid: string;

    @Type(() => LedgerPaymentDetails)
    @IsDefined()
    @ValidateNested()
    details: LedgerPaymentDetails;
}
