import { ITraceable } from "@ts-core/common";
import { IHlfObject } from "./IHlfObject";

export interface IHlfObjectGetDto extends ITraceable {
    uid: string;
}

export declare type IHlfObjectGetDtoResponse = IHlfObject;
