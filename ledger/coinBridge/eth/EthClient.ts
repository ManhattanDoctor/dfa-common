import { EthApiClient, IEthApiClientSettings } from '@ts-core/eth';
import { ETH_EVENT } from './Eths';
import { EventData } from 'web3-eth-contract';
import * as _ from 'lodash';

export class EthClient extends EthApiClient<IEthClientSettings> {
    // --------------------------------------------------------------------------
    //
    //  Help Methods
    //
    // --------------------------------------------------------------------------

    public toWei(value: string | number): string {
        return this.client.utils.toWei(value.toString(), 'ether');
    }

    public fromWei(value: string | number): string {
        return this.client.utils.fromWei(value.toString(), 'ether');
    }

    public async getBalance(value: string): Promise<string> {
        return this.client.eth.getBalance(value);
    }

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

    public deposit(userUid: string, coinUid: string): string {
        return this.contract.methods.deposit(userUid, coinUid).encodeABI();
    }

    // --------------------------------------------------------------------------
    //
    //  Public Properties
    //
    // --------------------------------------------------------------------------

    public get chainId(): number {
        return this.settings.chainId;
    }

    public get decimals(): number {
        return this.settings.decimals;
    }

    public get explorer(): string {
        return this.settings.explorer;
    }

    public get address(): string {
        return this.contract.options.address;
    }
}

export interface IEthClientSettings extends IEthApiClientSettings {
    chainId: number;
    explorer: string;
    decimals: number;
}