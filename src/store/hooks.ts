// import { Dispatch } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ContactsActions } from "./types";
import { RootState } from "./store";
import { ThunkDispatch } from "redux-thunk";

export const useAppDispatch = useDispatch<ThunkDispatch<RootState, void, ContactsActions>>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector