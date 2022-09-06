import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { Type } from 'class-transformer';
import { Matches, IsString, IsNumberString, IsOptional, IsDefined, ValidateNested } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { ILedgerPaymentDetails, LedgerPaymentDetails } from '../../../ledger/payment/LedgerPaymentDetails';
import { ICoinObject, CoinObject } from './ICoinObject';
import { LedgerCoin } from '@project/common/ledger/coin';

export class CoinEmitCommand extends ChaincodeTransportCommandAsync<ICoinEmitDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COIN_EMIT;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinEmitDto) {
        super(CoinEmitCommand.NAME, TransformUtil.toClass(CoinEmitDto, request));
    }

}

export enum CoinEmitType {
    DONATED = 'DONATED',
    FEE_AGGREGATOR_DEDUCTED = 'FEE_AGGREGATOR_DEDUCTED'
}

export interface ICoinEmitDto extends ITraceable {
    to: string;
    amount: string;
    coinUid: string;
    details: ILedgerPaymentDetails;
}

class CoinEmitDto implements ICoinEmitDto {
    @IsString()
    amount: string;

    @IsNumberString()
    amount: string;

    @Matches(LedgerCoin.UID_REG_EXP)
    coinUid: string;

    @Type(() => LedgerPaymentDetails)
    @IsDefined()
    @ValidateNested()
    details: LedgerPaymentDetails;
}
