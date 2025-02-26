import { TransportEvent } from '@ts-core/common';
import { IInitiatedDto, InitiatedDto, UserUtil } from '@hlf-core/common';
import { Matches } from 'class-validator';

export class UserEvent<T extends IUserEventDto = IUserEventDto> extends TransportEvent<T> {
    constructor(name: string, data: T) {
        super(name, data);
    }
}

export interface IUserEventDto extends IInitiatedDto {
    userUid: string;
}
export class UserEventDto extends InitiatedDto {
    @Matches(UserUtil.UID_REG_EXP)
    public userUid: string;
}
