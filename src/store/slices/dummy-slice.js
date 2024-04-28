import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const dummySlice = createSlice ({
    name: 'dummy',
    initialState,
    reducers: {
        addToDummy(state, action){
            state.push(action.payload);
        }
    },
});

export const {addToDummy} = dummySlice.actions;
export default dummySlice.reducer;