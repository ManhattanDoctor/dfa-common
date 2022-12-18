import { DateUtil, TransportCryptoManagerEd25519 } from "@ts-core/common";
import { ILedgerCompanyRegulation, LedgerCompanyRegulationTypePreset } from "./company/LedgerCompanyRegulation";
import { LedgerCompanyVotingProposalType } from "./company/voting";
import { LedgerVotingStepType } from "./voting/LedgerVotingStepType";
import { LedgerCompanyRole } from "./role/LedgerCompanyRole";
import { LedgerCoinIdPreset } from "./coin/LedgerCoinId";
import { LedgerVoting } from './voting/LedgerVoting';
import * as _ from 'lodash';

// --------------------------------------------------------------------------
//
//  Constants
//
// --------------------------------------------------------------------------

export const ROOT_VOTING_UID = LedgerVoting.createUid(new Date(2000, 0), _.padStart('0', 64, '0'));
export const ROOT_REQUEST_ID = _.padStart('0', 64, '0');

export const ROOT_USER_DESCRIPTION = 'ROOT_USER';
export const ROOT_USER_CRYPTO_ALGORITHM = TransportCryptoManagerEd25519.ALGORITHM;
export const ROOT_USER_CRYPTO_KEY_PUBLIC = 'e365007e85508c6b44d5101a1d59d0061a48fd1bcd393186ccb5e7ae938a59a8';
export const ROOT_USER_CRYPTO_KEY_PRIVATE = 'e87501bc00a3db3ba436f7109198e0cb65c5f929eabcedbbb5a9874abc2c73a3e365007e85508c6b44d5101a1d59d0061a48fd1bcd393186ccb5e7ae938a59a8';

export const ROOT_COMPANY_DESCRIPTION = 'ROOT_COMPANY';
export const ROOT_COMPANY_REGULATIONS: Array<ILedgerCompanyRegulation> = [
    {
        type: LedgerCompanyRegulationTypePreset.COIN_EMIT,
        proposal: LedgerCompanyVotingProposalType.COIN_EDIT,
        steps: [
            {
                type: LedgerVotingStepType.ROLE,
                roles: [LedgerCompanyRole.EXPERT, LedgerCompanyRole.PROTECTOR],
                duration: 3 * DateUtil.MILLISECONDS_MINUTE,
                percentForMin: 10,
                percentTotalMin: 20,
                percentAgainstMax: 30,
            },
            {
                type: LedgerVotingStepType.COIN,
                coinId: LedgerCoinIdPreset.VOTE,
                duration: 3 * DateUtil.MILLISECONDS_MINUTE,
                percentForMin: 5,
                percentTotalMin: 2,
                percentAgainstMax: 10,
            },
        ]
    },
    {
        type: LedgerCompanyRegulationTypePreset.PROJECT_ADD,
        proposal: LedgerCompanyVotingProposalType.PROJECT_ADD,
        steps: [
            {
                type: LedgerVotingStepType.ROLE,
                roles: [LedgerCompanyRole.EXPERT, LedgerCompanyRole.PROTECTOR],
                duration: 3 * DateUtil.MILLISECONDS_MINUTE,
                percentForMin: 15,
                percentTotalMin: 30,
                percentAgainstMax: 50,
            },
            {
                type: LedgerVotingStepType.COIN,
                coinId: LedgerCoinIdPreset.VOTE,
                duration: 5 * DateUtil.MILLISECONDS_MINUTE,
                percentForMin: 40,
                percentTotalMin: 2,
                percentAgainstMax: 50,
            }
        ]
    },
    {
        type: LedgerCompanyRegulationTypePreset.EXPERT_ADD,
        proposal: LedgerCompanyVotingProposalType.ROLE_EDIT,
        steps: [
            {
                type: LedgerVotingStepType.COIN,
                coinId: LedgerCoinIdPreset.VOTE,
                percentTotalMin: 2,
                duration: 5 * DateUtil.MILLISECONDS_MINUTE
            }
        ]
    },
    {
        type: LedgerCompanyRegulationTypePreset.EXPERT_REMOVE,
        proposal: LedgerCompanyVotingProposalType.ROLE_EDIT,
        steps: [
            {
                type: LedgerVotingStepType.COIN,
                coinId: LedgerCoinIdPreset.VOTE,
                percentTotalMin: 2,
                duration: 5 * DateUtil.MILLISECONDS_MINUTE
            }
        ]
    },
    {
        type: LedgerCompanyRegulationTypePreset.PROTECTOR_ADD,
        proposal: LedgerCompanyVotingProposalType.ROLE_EDIT,
        steps: [
            {
                type: LedgerVotingStepType.COIN,
                coinId: LedgerCoinIdPreset.VOTE,
                percentTotalMin: 2,
                duration: 12 * DateUtil.MILLISECONDS_MINUTE
            }
        ]
    },
    {
        type: LedgerCompanyRegulationTypePreset.PROTECTOR_REMOVE,
        proposal: LedgerCompanyVotingProposalType.ROLE_EDIT,
        steps: [
            {
                type: LedgerVotingStepType.COIN,
                coinId: LedgerCoinIdPreset.VOTE,
                percentTotalMin: 2,
                duration: 3 * DateUtil.MILLISECONDS_MINUTE
            }
        ]
    },
];

export const ROOT_COIN_VOTE_DECIMALS = 0;

export const ROOT_COIN_RUB_AMOUNT = '100000';
export const ROOT_COIN_RUB_DECIMALS = 2;

// --------------------------------------------------------------------------
//
//  Interface
//
// --------------------------------------------------------------------------

export interface IGenesis {
    rootUserUid: string;
    rootCompanyUid: string;
    createdDate: Date;
}