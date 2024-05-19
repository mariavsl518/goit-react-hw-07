import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        name: ''
    },
    reducers: {
        search: (state, action) => {
            state.name = action.payload;
        }
    }
})

export default filterSlice.reducer;

export const selectFilter = state => state.filter.name;

export const {search} = filterSlice.actions;