import { Matches } from 'class-validator';
import { TransformUtil } from '@ts-core/common';
import { TransportEvent } from '@ts-core/common';
import { LedgerVoting } from '../../ledger/voting';
import { ILedgerEventDto, LedgerEventDto } from './LedgerEvent';

export interface ILedgerVotingEventDto extends ILedgerEventDto {
    votingUid: string;
}

export class LedgerVotingEventDto extends LedgerEventDto {
    @Matches(LedgerVoting.UID_REG_EXP)
    votingUid: string;
}

export class LedgerVotingEvent extends TransportEvent<ILedgerVotingEventDto> {
    constructor(name: string, data: ILedgerVotingEventDto) {
        super(name, TransformUtil.toClass(LedgerVotingEventDto, data));
    }
}
