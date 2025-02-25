import * as _ from "lodash";

export class CoinBalance {
    public id: number;
    public held: string;
    public inUse: string;
    public total: string;
    public coinUid: string;
    public objectUid: string;
}

export function IsEqual<T>(first: Partial<T>, second: Partial<T>, keys: Array<keyof T>): Array<keyof T> {
    let items = new Array();
    for (let key of keys) {
        if (first[key] !== second[key]) {
            items.push(key);
        }
    }
    return items;
}