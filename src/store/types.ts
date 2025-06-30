import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export interface ContactsState {
  contacts: ContactDto[];
  groups: GroupContactsDto[];
  favorites: FavoriteContactsDto;
}

export enum ContactsActionTypes {
  ADD_CONTACT = 'ADD_CONTACT',
  SET_CONTACTS = 'SET_CONTACTS',
  DELETE_CONTACT = 'DELETE_CONTACT',
  EDIT_CONTACT = 'EDIT_CONTACT',
  TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
  ADD_GROUP = 'ADD_GROUP',
  SET_GROUPS = 'SET_GROUPS',
  DELETE_GROUP = 'DELETE_GROUP',
  EDIT_GROUP = 'EDIT_GROUP',
  ADD_CONTACT_TO_GROUP = 'ADD_CONTACT_TO_GROUP',
  DELETE_CONTACT_FROM_GROUP = 'DELETE_CONTACT_FROM_GROUP',
  FETCH_CONTACTS = 'FETCH_CONTACTS',
  FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
  FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR',
  FETCH_GROUPS = 'FETCH_GROUPS',
  FETCH_GROUPS_SUCCESS = 'FETCH_GROUPS_SUCCESS',
  FETCH_GROUPS_ERROR = 'FETCH_GROUPS_ERROR',
  SAVE_CONTACT = 'SAVE_CONTACT',
  SAVE_GROUP = 'SAVE_GROUP'
}

interface ISetContactsAction {
  type: ContactsActionTypes.SET_CONTACTS;
  payload: ContactDto[]
}

interface IAddContactAction {
  type: ContactsActionTypes.ADD_CONTACT;
  payload: ContactDto;
}

interface IDeleteContactAction {
  type: ContactsActionTypes.DELETE_CONTACT;
  payload: ContactDto['id'];
}

interface IEditContactAction {
  type: ContactsActionTypes.EDIT_CONTACT;
  payload: {id: ContactDto['id'], data: ContactDto}
}

interface IToggleFavoriteAction {
  type: ContactsActionTypes.TOGGLE_FAVORITE;
  payload: ContactDto['id'];
}

interface IAddGroupAction {
  type: ContactsActionTypes.ADD_GROUP;
  payload: GroupContactsDto
}

interface ISetGroupsAction {
  type: ContactsActionTypes.SET_GROUPS;
  payload: GroupContactsDto[]
}

interface IDeleteGroupAction {
  type: ContactsActionTypes.DELETE_GROUP;
  payload: GroupContactsDto['id']
}

interface IEditGroupAction {
  type: ContactsActionTypes.EDIT_GROUP;
  payload: {id: GroupContactsDto['id'], data: GroupContactsDto}
}

interface IAddContactToGroupAction {
  type: ContactsActionTypes.ADD_CONTACT_TO_GROUP;
  payload: {contactId: ContactDto['id'], groupId: GroupContactsDto['id']}
}

interface IDeleteContactFromGroupAction {
  type: ContactsActionTypes.DELETE_CONTACT_FROM_GROUP;
  payload: {contactId: ContactDto['id'], groupId: GroupContactsDto['id']}
}

interface IFetchContactsAction {
  type: ContactsActionTypes.FETCH_CONTACTS
}

interface IFetchContactsSuccessAction {
  type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS
}

interface IFetchContactsErrorAction {
  type: ContactsActionTypes.FETCH_CONTACTS_ERROR
}

interface IFetchGroupsAction {
  type: ContactsActionTypes.FETCH_GROUPS
}

interface IFetchGroupsSuccessAction {
  type: ContactsActionTypes.FETCH_GROUPS_SUCCESS
}

interface IFetchGroupsErrorAction {
  type: ContactsActionTypes.FETCH_GROUPS_ERROR
}

interface ISaveContactAction {
  type: ContactsActionTypes.SAVE_CONTACT;
  payload: ContactDto
}

interface ISaveGroupAction {
  type: ContactsActionTypes.SAVE_GROUP;
  payload: GroupContactsDto
}

export type ContactsActions =
  | ISetContactsAction
  | IAddContactAction
  | IDeleteContactAction
  | IEditContactAction
  | IToggleFavoriteAction
  | ISetGroupsAction
  | IAddGroupAction
  | IDeleteGroupAction
  | IEditGroupAction
  | IAddContactToGroupAction
  | IDeleteContactFromGroupAction
  | IFetchContactsAction
  | IFetchGroupsAction
  | ISaveContactAction
  | ISaveGroupAction
  | IFetchContactsSuccessAction
  | IFetchContactsErrorAction
  | IFetchGroupsSuccessAction
  | IFetchGroupsErrorAction
