import { Type } from 'class-transformer';

export class User {
    public id: number;
    public uid: string;
    public login: string;

    @Type(() => UserAttributes)
    public attributes: UserAttributes;
}

export class UserAttributes {
    public locale: string;
    public status: UserStatus;
    public created: Date;
}

export enum UserStatus {
    ACTIVE = 'ACTIVE',
    NON_ACTIVE = 'NON_ACTIVE'
}

