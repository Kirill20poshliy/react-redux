import { createStore, combineReducers, applyMiddleware } from "redux";
import contactsReducer from "./reducer";
import { thunk } from "redux-thunk";


const rootReducer = combineReducers({
    contacts: contactsReducer
})

export const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
)

export type RootState = ReturnType<typeof rootReducer>