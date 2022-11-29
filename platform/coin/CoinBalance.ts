import { Type } from 'class-transformer';

export class CoinBalance {
    id: number;
    coinId: number;
    ownerId: number;

    held: string;
    inUse: string;
    burned: string;
    emitted: string;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;
}