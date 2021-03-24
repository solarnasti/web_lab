import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Response} from "../SignUpForm/@slice";
import {AppDispatch} from "../../store";

export interface RoomState {
    createRoomState: [];
    joinRoomState: [];
    users: [],
    username: string;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: RoomState = {
    createRoomState: [],
    joinRoomState: [],
    users: [],
    username: '',
    loading: 'idle'
}

export const createRoom = createAsyncThunk<Response, { dispatch: AppDispatch, state: RoomState["createRoomState"] }>
('room/createByName', async (roomName, thunkAPI) => {
    const postOptions = {
        method: 'GET',
    };
    const response = await fetch(`/api/room?name=${roomName}`, postOptions);
    return (await response.json()) as Response;
})

//dispatch response?
//const createRoomAction = await store.dispatch(createRoom(roomName))

export const joinRoom = createAsyncThunk<Response, { dispatch: AppDispatch, state: RoomState["joinRoomState"] }>
('room/joinByID', async (roomId, thunkAPI) => {
    const postOptions = {
        method: 'GET',
    };
    const response = await fetch(`/api/room/${roomId}`, postOptions);
    return (await response.json()) as Response;
})

//const joinRoomAction = await store.dispatch(joinRoom(roomId))

export const RoomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        createRoom: (state, action) => {
            state.createRoomState = action.payload.createRoomState;
            state.loading = 'succeeded';
        },
        joinRoom: (state, action) => {
            state.joinRoomState = action.payload.joinRoomState;
            state.loading = 'succeeded';
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(createRoom.pending, (state, action) => {
            state.loading = 'pending';
        })
            .addCase(joinRoom.pending, (state, action) => {
                state.loading = 'pending';
            })
            .addCase(createRoom.rejected, (state, action) => {
                console.log('Error: Room creation Error!')
            })
            .addCase(joinRoom.rejected, (state, action) => {
                console.log('Error: Join the Room Error!')
            })
    }
})