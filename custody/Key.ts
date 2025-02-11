import { Type } from 'class-transformer';
import { IUIDable } from '@ts-core/common';
import { ICryptoKey } from '@hlf-core/common';

export class Key implements ICryptoKey, IUIDable {
    uid: string;
    owner: string;
    value: string;
    algorithm: KeyAlgorithm;

    @Type(() => Date)
    created: Date;
}

export enum KeyAlgorithm {
    RSA = 'RSA',
    ED25519 = 'Ed25519',
    GOST_R_3410 = 'GostR3410',
}
