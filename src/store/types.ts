import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export interface ContactsState {
  contacts: ContactDto[];
  groups: GroupContactsDto[];
  favorites: FavoriteContactsDto;
}

export enum ContactsActionTypes {
  FETCH_CONTACTS_REQUEST = 'FETCH_CONTACTS_REQUEST',
  FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
  FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE',
  
  FETCH_GROUPS_REQUEST = 'FETCH_GROUPS_REQUEST',
  FETCH_GROUPS_SUCCESS = 'FETCH_GROUPS_SUCCESS',
  FETCH_GROUPS_FAILURE = 'FETCH_GROUPS_FAILURE',
  
  TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
  
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR'
}

interface FetchContactsRequestAction {
  type: ContactsActionTypes.FETCH_CONTACTS_REQUEST;
}

interface FetchContactsSuccessAction {
  type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS;
  payload: ContactDto[];
}

interface FetchContactsFailureAction {
  type: ContactsActionTypes.FETCH_CONTACTS_FAILURE;
  payload: string;
}

interface FetchGroupsRequestAction {
  type: ContactsActionTypes.FETCH_GROUPS_REQUEST;
}

interface FetchGroupsSuccessAction {
  type: ContactsActionTypes.FETCH_GROUPS_SUCCESS;
  payload: GroupContactsDto[];
}

interface FetchGroupsFailureAction {
  type: ContactsActionTypes.FETCH_GROUPS_FAILURE;
  payload: string;
}

interface ToggleFavoriteAction {
  type: ContactsActionTypes.TOGGLE_FAVORITE;
  payload: ContactDto['id'];
}

interface SetLoadingAction {
  type: ContactsActionTypes.SET_LOADING;
  payload: boolean;
}

interface SetErrorAction {
  type: ContactsActionTypes.SET_ERROR;
  payload: string | null;
}

export type ContactsActions =
  | FetchContactsRequestAction
  | FetchContactsSuccessAction
  | FetchContactsFailureAction
  | FetchGroupsRequestAction
  | FetchGroupsSuccessAction
  | FetchGroupsFailureAction
  | ToggleFavoriteAction
  | SetLoadingAction
  | SetErrorAction;
