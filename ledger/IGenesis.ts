import { DateUtil, TransportCryptoManagerEd25519 } from "@ts-core/common";
import { LedgerCompanyRegulationType } from "./company/LedgerCompanyRegulation";
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

export const ROOT_USER_DESCRIPTION = 'ROOT_USER';
export const ROOT_USER_CRYPTO_ALGORITHM = TransportCryptoManagerEd25519.ALGORITHM;
export const ROOT_USER_CRYPTO_KEY_PUBLIC = 'e365007e85508c6b44d5101a1d59d0061a48fd1bcd393186ccb5e7ae938a59a8';
export const ROOT_USER_CRYPTO_KEY_PRIVATE = 'e87501bc00a3db3ba436f7109198e0cb65c5f929eabcedbbb5a9874abc2c73a3e365007e85508c6b44d5101a1d59d0061a48fd1bcd393186ccb5e7ae938a59a8';

export const ROOT_COMPANY_DESCRIPTION = 'ROOT_COMPANY';
export const ROOT_COMPANY_REGULATIONS = [
    {
        type: LedgerCompanyRegulationType.COIN_EMIT,
        steps: [
            {
                type: LedgerVotingStepType.COIN,
                coinId: LedgerCoinIdPreset.VOTE,
                percent: 10,
                duration: DateUtil.MILLISECONDS_HOUR
            }
        ]
    },
    {
        type: LedgerCompanyRegulationType.COIN_BURN,
        steps: [
            {
                type: LedgerVotingStepType.COIN,
                coinId: LedgerCoinIdPreset.VOTE,
                percent: 10,
                duration: DateUtil.MILLISECONDS_HOUR
            }
        ]
    },
    {
        type: LedgerCompanyRegulationType.PROJECT_ADD,
        steps: [
            {
                type: LedgerVotingStepType.ROLE,
                roles: [LedgerCompanyRole.EXPERT, LedgerCompanyRole.PROTECTOR],
                duration: DateUtil.MILLISECONDS_HOUR
            },
            {
                type: LedgerVotingStepType.COIN,
                coinId: LedgerCoinIdPreset.VOTE,
                percent: 5,
                duration: DateUtil.MILLISECONDS_HOUR
            }
        ]
    },
    {
        type: LedgerCompanyRegulationType.EXPERT_ADD,
        steps: [
            {
                type: LedgerVotingStepType.COIN,
                coinId: LedgerCoinIdPreset.VOTE,
                percent: 5,
                duration: DateUtil.MILLISECONDS_MINUTE
            }
        ]
    },
    {
        type: LedgerCompanyRegulationType.EXPERT_REMOVE,
        steps: [
            {
                type: LedgerVotingStepType.COIN,
                coinId: LedgerCoinIdPreset.VOTE,
                percent: 5,
                duration: DateUtil.MILLISECONDS_HOUR,
            }
        ]
    },
    {
        type: LedgerCompanyRegulationType.PROTECTOR_ADD,
        steps: [
            {
                type: LedgerVotingStepType.COIN,
                coinId: LedgerCoinIdPreset.VOTE,
                percent: 5,
                duration: DateUtil.MILLISECONDS_MINUTE
            }
        ]
    },
    {
        type: LedgerCompanyRegulationType.PROTECTOR_REMOVE,
        steps: [
            {
                type: LedgerVotingStepType.COIN,
                coinId: LedgerCoinIdPreset.VOTE,
                percent: 5,
                duration: DateUtil.MILLISECONDS_MINUTE
            }
        ]
    },
];

export const ROOT_COIN_VOTE_AMOUNT = '1000';
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