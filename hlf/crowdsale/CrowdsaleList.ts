import { IsDefined, IsNumberString } from 'class-validator';
import { MathUtil } from '@ts-core/common';
import * as _ from 'lodash';

export class CrowdsaleList {

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static create(): CrowdsaleList {
        let item = new CrowdsaleList();
        item.items = <Record<string, string>>{};
        return item;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsNumberString()
    public collected: string;

    @IsDefined()
    protected items: Record<string, string>;

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public add(uid: string, value: string): void {
        if (_.isNil(this.get(uid))) {
            this.items[uid] = '0';
        }
        this.collected = MathUtil.add(this.collected, value);
        this.items[uid] = MathUtil.add(this.items[uid], value);
    }

    public get(uid: string): string {
        return this.items.hasOwnProperty(uid) ? this.items[uid] : null;
    }

    // --------------------------------------------------------------------------
    //
    //  Public Properties
    //
    // --------------------------------------------------------------------------

    public get participants(): number {
        return Object.keys(this.items).length;
    }

}