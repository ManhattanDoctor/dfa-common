import { TransformUtil } from '@ts-core/common';
import { IsOptional, IsString } from 'class-validator';
import { HlfTransportCommandAsync } from '@hlf-core/common';
import { CoinTransferCommand as CoinTransferCommandBase, ICoinTransferDto as ICoinTransferDtoBase, CoinTransferDto as CoinTransferDtoBase } from '@hlf-core/coin';
import { IInitiatedDto } from './Initiated';

export class CoinTransferCommand extends HlfTransportCommandAsync<ICoinTransferDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = CoinTransferCommandBase.NAME;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinTransferDto) {
        super(CoinTransferCommand.NAME, TransformUtil.toClass(CoinTransferDto, request));
    }
}

export interface ICoinTransferDto extends ICoinTransferDtoBase, IInitiatedDto { }

export class CoinTransferDto extends CoinTransferDtoBase implements ICoinTransferDto {
    @IsOptional()
    @IsString()
    public initiatorUid?: string;
}
