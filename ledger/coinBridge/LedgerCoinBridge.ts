import { getUid, IUIDable, UID } from "@ts-core/common";
import { IsInt, Min, Matches } from 'class-validator';
import * as _ from 'lodash';

export class LedgerCoinBridge implements IUIDable {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static PREFIX = 'coinBridge';
    public static NAME_PATTERN = `[A-Z]{1,35}`;

    public static UID_REG_EXP = new RegExp(`^${LedgerCoinBridge.PREFIX}/${LedgerCoinBridge.NAME_PATTERN}$`);
    public static NAME_REG_EXP = new RegExp(`^${LedgerCoinBridge.NAME_PATTERN}$`);

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static create(name: string): LedgerCoinBridge {
        let item = new LedgerCoinBridge();
        item.uid = LedgerCoinBridge.createUid(name);
        item.name = name;
        item.blockHeight = 0;
        return item;
    }

    public static createUid(name: string): string {
        return `${LedgerCoinBridge.PREFIX}/${name}`;
    }

    public static getName(coin: UID): string {
        let uid = getUid(coin);
        return !_.isNil(uid) ? _.last(uid.split('/')) : null;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(LedgerCoinBridge.UID_REG_EXP)
    public uid: string;

    @Matches(LedgerCoinBridge.NAME_REG_EXP)
    public name: string;

    @IsInt()
    @Min(0)
    public blockHeight: number;
}
