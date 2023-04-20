/*
import * as io from 'socket.io-client';
import { ExtendedError, ObservableData, TransformUtil } from '@ts-core/common';
import { UrlUtil } from '@ts-core/common';
import * as _ from 'lodash';
import { ILogger } from '@ts-core/common';
import { ISocketClientBaseSettings, SocketClient as CommonSocketClient } from '@ts-core/socket';
import { Socket } from 'socket.io-client';
import { VotingCompany } from '../voting/company';

export class SocketClient extends CommonSocketClient<SocketClientEvent, SocketClientEventData | ExtendedError, ISocketSettings> {
    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(protected logger: ILogger, url?: string) {
        super(logger, { url, reconnectionAttempts: 3 });
    }

    //--------------------------------------------------------------------------
    //
    // 	Protected Methods
    //
    //--------------------------------------------------------------------------

    protected eventListenersAdd(socket: Socket): void {
        socket.on(SocketClientEvent.VOTING_CHANGED, this.proxyVotingChanged);
    }

    protected eventListenersRemove(socket: Socket): void {
        socket.off(SocketClientEvent.VOTING_CHANGED, this.proxyVotingChanged);
    }

    protected createSocket(): Socket {
        return io.connect(`${UrlUtil.parseUrl(this.url)}${NAMESPACE}`, this.settings);
    }

    // --------------------------------------------------------------------------
    //
    //  Socket Methods
    //
    // --------------------------------------------------------------------------

    public destroy(): void {
        if (this.isDestroyed) {
            return;
        }
        super.destroy();
        this.disconnect();

        this._settings = null;
        this.logger = null;
    }

    //--------------------------------------------------------------------------
    //
    // 	Socket Event Handlers
    //
    //--------------------------------------------------------------------------

    private proxyVotingChanged = (item: any): void => {
        this.votingChanged(TransformUtil.toClass(VotingCompany, item));
    };


    //--------------------------------------------------------------------------
    //
    // 	Socket Event Handlers
    //
    //--------------------------------------------------------------------------

    protected votingChanged(item: VotingCompany): void {
        this.observer.next(new ObservableData(SocketClientEvent.VOTING_CHANGED, item));
    }
}

export interface ISocketSettings extends ISocketClientBaseSettings {
    url: string;
    ledgerNameDefault?: string;
}
*/

import { VotingCompany } from "../../platform/voting/company";

export const NAMESPACE = 'dao';
export const ROOM_SIGN = 'sign';
export const ROOM_VOTING = 'voting';

export enum SocketClientEvent {
    VOTING_CHANGED = 'VOTING_CHANGED',
}

export type SocketClientEventData = VotingCompany;



