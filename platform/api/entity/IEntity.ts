import { Sha512 } from "@ts-core/common";
import { ObjectType } from "../../../hlf";
import * as _ from 'lodash';

export interface IEntity {
    id: number;
    type: ObjectType;
    name: string;
    picture: string;
    description?: string;
}