import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = [];

export const favoritesSlice = createSlice({
    name: "favoritesSlice",
    initialState,
    reducers: {
        addToFavorites(state, action: PayloadAction<string>) {
            state.push(action.payload)
        },
        
    },
});

export const { addToFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
