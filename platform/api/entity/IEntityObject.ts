import { Sha512 } from "@ts-core/common";
import { ObjectType } from "../../../hlf";
import * as _ from 'lodash';

export interface IEntityObject {
    id: number;
    type: ObjectType;
    name: string;
    picture: string;
    description?: string;
}

export function entityObjectPicture(uid: string, options: IEntityObjectPicture): string {
    let { display, rating, size } = options;
    if (_.isNil(display)) {
        display = 'identicon';
    }
    if (_.isNil(rating)) {
        rating = 'g';
    }
    if (_.isNil(size)) {
        size = '200';
    }
    return `https://www.gravatar.com/avatar/${Sha512.hex(uid)}?s=${size}&d=${display}&r=${rating}`;
}

export interface IEntityObjectPicture {
    size?: string;
    rating?: string;
    display?: string;
}