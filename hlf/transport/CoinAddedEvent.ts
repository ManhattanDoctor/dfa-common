import { IsDefined, ValidateNested } from 'class-validator';
import { TransformUtil, TransportEvent } from '@ts-core/common';
import { IInitiatedDto, InitiatedDto } from '@hlf-core/common';
import { Event } from './Event';
import { Coin } from '../coin';

export class CoinAddedEvent extends TransportEvent<ICoinAddedEventDto> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = Event.COIN_ADDED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ICoinAddedEventDto) {
        super(CoinAddedEvent.NAME, TransformUtil.toClass(CoinAddedEventDto, data));
    }
}

export interface ICoinAddedEventDto extends IInitiatedDto {
    coin: Coin;
}

export class CoinAddedEventDto extends InitiatedDto implements ICoinAddedEventDto {
    @IsDefined()
    @ValidateNested()
    public coin: Coin;
}
