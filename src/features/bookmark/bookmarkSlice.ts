import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILocation } from "../../interfaces";

interface IBookmarkHomeLocation extends ILocation {};

export interface IBookmarkState {
    home: IBookmarkHomeLocation
};

const initialState: IBookmarkState = {
    home: {} as IBookmarkHomeLocation
};

export const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {
        setBookmark: (state, action: PayloadAction<IBookmarkHomeLocation>) => {
            console.log(action.payload);
            state.home = action.payload;
        }
    },
});

export const {setBookmark} = bookmarkSlice.actions;
export default bookmarkSlice.reducer;