import { TransformUtil } from '@ts-core/common';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import { ITraceable } from '@ts-core/common';
import { IsString, Matches, IsNumberString } from 'class-validator';
import { LedgerCoin } from '../../../ledger/coin';
import { LedgerVoting } from '@project/common/ledger/voting';

export class CoinHoldCommand extends ChaincodeTransportCommandAsync<ICoinHoldDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.COIN_HOLD;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinHoldDto) {
        super(CoinHoldCommand.NAME, TransformUtil.toClass(CoinHoldDto, request));
    }
}

export interface ICoinHoldDto extends ITraceable {
    from: string;
    amount: string;
    coinUid: string;
    votingUid: string;
}

export class CoinHoldDto implements ICoinHoldDto {
    @IsString()
    from: string;

    @IsNumberString()
    amount: string;

    @Matches(LedgerCoin.UID_REG_EXP)
    coinUid: string;

    @Matches(LedgerVoting.UID_REG_EXP)
    votingUid: string;
}
