import { EthApiClient, IEthApiClientSettings } from '@ts-core/eth';
import { EthEventType, ETH_EVENT, LedgerCoinBridgeAction, LedgerCoinBridgeActionType } from '../index';
import { EventData } from 'web3-eth-contract';
import * as _ from 'lodash';
import { ObjectUtil } from '@ts-core/common';

export class EthClient extends EthApiClient<IEthClientSettings> {
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public async parseEvents(events: Array<EventData>): Promise<Array<LedgerCoinBridgeAction>> {
        let items = new Array();
        for (let event of events) {
            let item = event.returnValues.data;
            let action = new LedgerCoinBridgeAction();
            action.decimals = this.settings.decimals;
            action.transactionHash = event.transactionHash;
            ObjectUtil.copyProperties(item, action, ['objectUid', 'coinUid', 'target', 'amount'])

            switch (item.name) {
                case EthEventType.WITHDREW:
                    action.type = LedgerCoinBridgeActionType.WITHDRAWAL;
                    break;
                case EthEventType.DEPOSITED:
                    action.type = LedgerCoinBridgeActionType.DEPOSIT;
                    break;
            }
            items.push(action);
        }
        return items;
    }

    public async getLastBlockHeight(): Promise<number> {
        return this.getBlockNumber();
    }

    public async getEvents(from: number, to: number): Promise<Array<EventData>> {
        return await this.contract.getPastEvents(ETH_EVENT, { fromBlock: from, toBlock: to });
    }

    public async isHasEvents(from: number, to: number): Promise<boolean> {
        return !_.isEmpty(await this.getEvents(from, to));
    }
}

export interface IEthClientSettings extends IEthApiClientSettings {
    decimals: number;
}