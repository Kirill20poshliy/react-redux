import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites/favoritesSlice"
import { contactsSlice } from "./contacts/contactsSlice"
import { groupsSlice } from "./groups/groupsSlice";

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        [contactsSlice.reducerPath]: contactsSlice.reducer,
        [groupsSlice.reducerPath]: groupsSlice.reducer,
    },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
		.concat(
			contactsSlice.middleware,
            groupsSlice.middleware,
		)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
