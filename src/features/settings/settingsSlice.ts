import { createSlice } from "@reduxjs/toolkit";

export interface ISettingsState {
    unit: 'C' | 'F',
    extraInfo: boolean,
}

const initialState: ISettingsState = {
    unit: 'C',
    extraInfo: false,
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setUnit: (state, action) => {
            state = {...state, unit: action.payload};
        },
        setExtraInfo: (state, action) => {
            state = {...state, extraInfo: action.payload};
        }
    },
});

export const {setUnit, setExtraInfo} = settingsSlice.actions;
export default settingsSlice.reducer;