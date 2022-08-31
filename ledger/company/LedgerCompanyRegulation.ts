import * as _ from 'lodash';
import { LedgerRegulation } from '../regulation';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, isEnum, min, max } from 'class-validator';

export enum LedgerCompanyRegulationType {
    COIN_ADD = 'COIN_ADD',
    COIN_EMIT = 'COIN_EMIT',
    COIN_BURN = 'COIN_BURN',

    PROJECT_ADD = 'PROJECT_ADD',
    PROJECT_EDIT = 'PROJECT_EDIT',
    PROJECT_REMOVE = 'PROJECT_REMOVE',

    EXPERT_ADD = 'EXPERT_ADD',
    EXPERT_REMOVE = 'EXPERT_REMOVE',

    PROTECTOR_ADD = 'PROTECTOR_ADD',
    PROTECTOR_REMOVE = 'PROTECTOR_REMOVE',

    REGULATION_CHANGE = 'REGULATION_CHANGE',
}

export type LedgerCompanyRegulation = LedgerRegulation<LedgerCompanyRegulationType>;

@ValidatorConstraint({ name: 'LedgerCompanyRegulation', async: false })
export class LedgerCompanyRegulationValidator implements ValidatorConstraintInterface {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    public validate(item: LedgerCompanyRegulation, args: ValidationArguments): Promise<boolean> | boolean {
        if (_.isEmpty(item)) {
            return false;
        }

        let keys = Object.keys(item);
        if (_.isEmpty(keys)) {
            return false;
        }
        if (!keys.includes(LedgerCompanyRegulationType.REGULATION_CHANGE)) {
            return false;
        }

        for (let key of keys) {
            if (!isEnum(key, LedgerCompanyRegulationType)) {
                return false;
            }
            let value = item[key];
            if (min(value, 0) || max(value, 100)) {
                return false;
            }
        }
    }

    public defaultMessage(args: ValidationArguments): string {
        return 'Ledger company regulation must have correct keys and values';
    }
}
