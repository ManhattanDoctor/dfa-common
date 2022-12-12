import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { Matches, IsString, IsNumberString } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { LedgerCoin } from '../../../ledger/coin';
import { LedgerVoting } from '../../../ledger/voting';

export class CoinTransferCommand extends ChaincodeTransportCommandAsync<ICoinTransferDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COIN_TRANSFER;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinTransferDto) {
        super(CoinTransferCommand.NAME, TransformUtil.toClass(CoinTransferDto, request));
    }
}

export interface ICoinTransferDto extends ITraceable {
    to: string;
    from: string;
    amount: string;
    coinUid: string;
    votingUid?: string;
}

class CoinTransferDto implements ICoinTransferDto {
    @IsString()
    to: string;

    @IsString()
    from: string;

    @IsNumberString()
    amount: string;

    @Matches(LedgerCoin.COIN_ID_PATTERN)
    coinUid: string;

    @Matches(LedgerVoting.UID_REG_EXP)
    votingUid: string;
}
