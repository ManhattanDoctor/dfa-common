import { ClassType, TransformUtil, UnreachableStatementError } from "@ts-core/common";
import { ICoin, Coin } from "./Coin";
import { CoinData, ICoinData } from "./data";
import { ICoinPermission, CoinPermissionAmount, CoinPermissionType, CoinPermissionBlacklist, CoinPermissionWhitelist, CoinPermissionEmission } from "./permission";
import { CoinBalance, ICoinBalance } from "@hlf-core/coin";
import * as _ from 'lodash';

export class CoinFactory {
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public static transform<T extends ICoin>(item: any): T {
        let classType: ClassType<ICoin> = Coin;
        return TransformUtil.toClass(classType, item) as T;
    }

    public static transformBalance<T extends ICoinBalance>(item: ICoinBalance): T {
        console.log(item);
        let classType: ClassType<ICoinBalance> = CoinBalance;
        return TransformUtil.toClass(classType, item) as T;
    }

    public static transformData<T extends ICoinData>(item: ICoinData): T {
        if (_.isEmpty(item)) {
            return undefined;
        }
        let classType: ClassType<ICoinData> = CoinData;
        return TransformUtil.toClass(classType, item) as T;
    }

    public static transformPermission<T extends ICoinPermission>(item: ICoinPermission): T {
        let classType: ClassType<ICoinPermission> = null;
        switch (item.type) {
            case CoinPermissionType.AMOUNT:
                classType = CoinPermissionAmount;
                break;
            case CoinPermissionType.EMISSION:
                classType = CoinPermissionEmission;
                break;
            case CoinPermissionType.WHITELIST:
                classType = CoinPermissionWhitelist;
                break;
            case CoinPermissionType.BLACKLIST:
                classType = CoinPermissionBlacklist;
                break;
            default:
                throw new UnreachableStatementError(item.type);
        }
        return TransformUtil.toClass(classType, item) as T;
    }
}