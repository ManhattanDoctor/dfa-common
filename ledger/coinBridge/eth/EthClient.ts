import { EthApiClient, IEthApiClientSettings } from '@ts-core/eth';
import { ETH_EVENT } from './Eths';
import { EventData } from 'web3-eth-contract';
import * as _ from 'lodash';

export class EthClient extends EthApiClient<IEthClientSettings> {
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

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