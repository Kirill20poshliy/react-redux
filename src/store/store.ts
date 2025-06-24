import { createStore, combineReducers } from "redux";
import contactsReducer from "./reducer";

export const store = createStore(
    combineReducers({
        contacts: contactsReducer
    })
)