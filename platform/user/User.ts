import { Type } from 'class-transformer';

export class UserAttributes {
    public status: UserStatus;
    public created: Date;
}

export class User {
    public id: number;
    public uid: string;
    public login: string;

    @Type(() => UserAttributes)
    public attributes: UserAttributes;
}

export enum UserStatus {
    ACTIVE = 'ACTIVE',
    NON_ACTIVE = 'NON_ACTIVE'
}

