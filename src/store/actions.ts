import { ContactDto } from 'src/types/dto/ContactDto';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';
import {
  ContactsActionTypes,
  ContactsActions,
} from './types';
import contactsApi from '../api/api'
import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';

export const setContactsActionCreator = (contacts: ContactDto[]): ContactsActions => ({
  type: ContactsActionTypes.SET_CONTACTS,
  payload: contacts
})

export const addContactActionCreator = (contactData: ContactDto): ContactsActions => ({
  type: ContactsActionTypes.ADD_CONTACT,
  payload: contactData
})

export const deleteContactActionCreator = (id: ContactDto['id']): ContactsActions => ({
  type: ContactsActionTypes.DELETE_CONTACT,
  payload: id
})

export const editContactActionCreator = (id: ContactDto['id'], contactData: ContactDto): ContactsActions => ({
  type: ContactsActionTypes.EDIT_CONTACT,
  payload: {id, data: contactData}
})

export const toggleFavoriteActionCreator = (id: ContactDto['id']): ContactsActions => ({
  type: ContactsActionTypes.TOGGLE_FAVORITE,
  payload: id
})

export const setGroupsActionCreator = (groups: GroupContactsDto[]): ContactsActions => ({
  type: ContactsActionTypes.SET_GROUPS,
  payload: groups
})

export const addGroupActionCreator = (groupData: GroupContactsDto): ContactsActions => ({
  type: ContactsActionTypes.ADD_GROUP,
  payload: groupData
})

export const deleteGroupActionCreator = (id: GroupContactsDto['id']): ContactsActions => ({
  type: ContactsActionTypes.DELETE_GROUP,
  payload: id
})

export const editGroupActionCreator = (id: GroupContactsDto['id'], groupData: GroupContactsDto): ContactsActions => ({
  type: ContactsActionTypes.EDIT_GROUP,
  payload: {id, data: groupData}
})

export const addContactToGroupActionCreator = (
  contactId: ContactDto['id'], 
  groupId: GroupContactsDto['id']
): ContactsActions => ({
  type: ContactsActionTypes.ADD_CONTACT_TO_GROUP,
  payload: {contactId, groupId}
})

export const deleteContactFromGroupActionCreator = (
  contactId: ContactDto['id'], 
  groupId: GroupContactsDto['id']
): ContactsActions => ({
  type: ContactsActionTypes.DELETE_CONTACT_FROM_GROUP,
  payload: {contactId, groupId}
})

export const fetchContacts = (): ThunkAction<void, RootState, void, ContactsActions> => {
  return async (dispatch) => {
    dispatch({type: ContactsActionTypes.FETCH_CONTACTS})

    const res = await contactsApi.getContacts()
    if (res) {
      dispatch(setContactsActionCreator(res))
      dispatch({type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS})
    } else {
      dispatch({type: ContactsActionTypes.FETCH_CONTACTS_ERROR})
    }
  }
}

export const fetchGroups = (): ThunkAction<void, RootState, void, ContactsActions> => {
  return async (dispatch) => {
    dispatch({type: ContactsActionTypes.FETCH_GROUPS})

    const res = await contactsApi.getGroups()
    if (res) {
      dispatch(setGroupsActionCreator(res))
      dispatch({type: ContactsActionTypes.FETCH_GROUPS_SUCCESS})
    } else {
      dispatch({type: ContactsActionTypes.FETCH_GROUPS_ERROR})
    }
  }
}
