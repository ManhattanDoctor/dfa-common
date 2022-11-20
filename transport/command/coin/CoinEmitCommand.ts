import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { Type } from 'class-transformer';
import { Matches, IsString, IsNumberString, IsOptional, IsDefined, ValidateNested } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { ILedgerPaymentDetails, LedgerPaymentDetails } from '../../../ledger/payment';
import { LedgerCoin } from '../../../ledger/coin';
import { LedgerVoting } from '@project/common/ledger/voting';

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
    amount: string;
    coinUid: string;
    objectUid: string;
    votingUid: string;
}

class CoinEmitDto implements ICoinEmitDto {
    @IsString()
    objectUid: string;

    @IsNumberString()
    amount: string;

    @Matches(LedgerCoin.UID_REG_EXP)
    coinUid: string;

    @Matches(LedgerVoting.UID_REG_EXP)
    votingUid: string;
}
