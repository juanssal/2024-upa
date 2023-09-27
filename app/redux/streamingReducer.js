import {createSlice} from '@reduxjs/toolkit';
const streamingSlice = createSlice({
    name: 'streaming',
    initialState: {
        name: 'none'
    },
    reducers: {
        SET_NAME: (state, action) => {
            state.name = action.payload
        }
}})

export const {SET_NAME} = streamingSlice.actions;
export default streamingSlice.reducer;