import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Response} from "../SignUpForm/@slice";
import {AppDispatch} from "../../store";

export interface RoomState {
    fetchingState: string;
    insideRoomState: [],
    error: string;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: RoomState = {
    fetchingState: 'none',
    insideRoomState: [],
    error: null,
    loading: 'idle'
}

export const createRoom = createAsyncThunk<Response, { dispatch: AppDispatch, state: RoomState["insideRoomState"] }>
('room/fetchByName', async (roomName, thunkAPI) => {
    const postOptions = {
        method: 'GET',
    };
    const response = await fetch(`/api/room?name=${roomName}`, postOptions);
    return (await response.json()) as Response;
})
//dispatch response?

export const Room = createSlice({
    name: 'room',
    initialState,
    reducers: {
        createRoomRequest: (state) => {
            state.fetchingState = 'requesting';
        },
        createRoomSuccess: (state, action) => {
            state.insideRoomState = action.payload.insideRoomState;
            state.fetchingState = 'success';
        },
        createRoomError: (state, action) => {
            state.fetchingState = 'failed';
            state.error = action.payload.error;
        }
    },
    extraReducers: builder => {
        builder.addCase(createRoom.rejected, (state, action) => {
            console.log('Error: Room creation Error!')
        })
    }
})