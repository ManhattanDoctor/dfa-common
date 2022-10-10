import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { Type } from 'class-transformer';
import { Matches, IsString, IsNumberString, IsOptional, IsDefined, ValidateNested } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { ILedgerPaymentDetails, LedgerPaymentDetails } from '../../../ledger/payment';
import { LedgerCoin } from '../../../ledger/coin';

export class CoinExchangeCommand extends ChaincodeTransportCommandAsync<ICoinExchangeDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COIN_EXCHANGE;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinExchangeDto) {
        super(CoinExchangeCommand.NAME, TransformUtil.toClass(CoinExchangeDto, request));
    }

}

export enum CoinExchangeType {
    DONATED = 'DONATED',
    FEE_AGGREGATOR_DEDUCTED = 'FEE_AGGREGATOR_DEDUCTED'
}

export interface ICoinExchangeDto extends ITraceable {
    to: string;
    from: string;
}

class CoinExchangeDto implements ICoinExchangeDto {
    @Matches(LedgerCoin.UID_REG_EXP)
    to: string;
    @Matches(LedgerCoin.UID_REG_EXP)
    from: string;
}
