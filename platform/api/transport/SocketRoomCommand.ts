import { TransformUtil, TransportCommand } from "@ts-core/common";
import { IsString, IsEnum } from 'class-validator';

export class SocketRoomCommand extends TransportCommand<ISocketRoomDto>{
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = 'SocketRoomCommand';

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ISocketRoomDto) {
        super(SocketRoomCommand.NAME, TransformUtil.toClass(SocketRoomDto, request));
    }
}

export interface ISocketRoomDto {
    name: string;
    action: SocketRoomAction;
}
export enum SocketRoomAction {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
}

class SocketRoomDto implements ISocketRoomDto {
    @IsString()
    name: string;
    
    @IsEnum(SocketRoomAction)
    action: SocketRoomAction;
}