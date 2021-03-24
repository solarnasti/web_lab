import * as React from 'react';
import {useState} from 'react'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {createRoom, joinRoom} from './@slice';

const chatRoom: React.FC = () => {
    const [roomName, setRoomName] = useState("");
    const [roomId, setRoomId] = useState("");
    const currentRoom = useAppSelector(state => state.room);

    const dispatch = useAppDispatch();

    return (
        <div className="create">
            {/*<div>*/}
            {/*    <span>Create new room</span>*/}
            {/*    <input type="text" placeholder="Room name" value={roomName} onChange={(e) => setRoomName(e.target.value)} />*/}
            {/*    <button onClick={() => dispatch(createRoom(roomName))}>Create</button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <span>Join existing room</span>*/}
            {/*    <input type="text" placeholder="Room code" value={roomId} onChange={(e) => setRoomId(e.target.value)} />*/}
            {/*    <button onClick={() => dispatch(joinRoom(roomId))}>Join</button>*/}
            {/*</div>*/}
        </div>
    );
}

export default chatRoom;