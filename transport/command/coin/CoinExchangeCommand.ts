import { TransformUtil } from '@ts-core/common';
import { Matches, IsString } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerCoin } from '../../../ledger/coin';
import { CoinRateGetDto, ICoinRateGetDto } from './CoinRateGetCommand';

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

export interface ICoinExchangeDto extends ICoinRateGetDto {
    rate: string;
    amount: string;
}

class CoinExchangeDto extends CoinRateGetDto implements ICoinExchangeDto {
    @IsString()
    rate: string;

    @IsString()
    amount: string;
}
