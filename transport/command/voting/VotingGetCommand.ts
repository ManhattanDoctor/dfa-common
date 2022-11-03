import { ITraceable } from '@ts-core/common';
import { TransformUtil } from '@ts-core/common';
import { IsOptional, Matches, IsArray } from 'class-validator';
import { LedgerCommand, ChaincodeTransportCommandAsync } from '../LedgerCommand';
import * as _ from 'lodash';
import { LedgerVoting } from '../../../ledger/voting/LedgerVoting';
import { LedgerCompanyVoting } from '../../../ledger/company/voting';
import { ledgerVotingTransform } from '../../../ledger/voting';

export class VotingGetCommand extends ChaincodeTransportCommandAsync<IVotingGetDto, LedgerVoting> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = LedgerCommand.VOTING_GET;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IVotingGetDto) {
        super(VotingGetCommand.NAME, TransformUtil.toClass(VotingGetDto, request), null, true);
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: LedgerVoting): LedgerVoting {
        return ledgerVotingTransform(item);
    }
}

export interface IVotingGetDto extends ITraceable {
    uid: string;
    details?: Array<keyof LedgerVoting>;
}

class VotingGetDto implements IVotingGetDto {
    @Matches(LedgerVoting.UID_REG_EXP)
    uid: string;

    @IsArray()
    @IsOptional()
    details?: Array<keyof LedgerVoting>;
}

