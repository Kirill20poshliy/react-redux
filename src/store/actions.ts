import { ContactDto } from 'src/types/dto/ContactDto';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';
import {
  ContactsActionTypes,
  ContactsActions,
} from './types';

export const fetchContactsRequest = (): ContactsActions => ({
  type: ContactsActionTypes.FETCH_CONTACTS_REQUEST
});

// export const fetchContactsSuccess = (contacts: ContactDto[]): FetchContactsSuccessAction => ({
//   type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS,
//   payload: contacts
// });

// export const fetchContactsFailure = (error: string): FetchContactsFailureAction => ({
//   type: ContactsActionTypes.FETCH_CONTACTS_FAILURE,
//   payload: error
// });

export const fetchGroupsRequest = (): ContactsActions => ({
  type: ContactsActionTypes.FETCH_GROUPS_REQUEST
});

// export const fetchGroupsSuccess = (groups: GroupContactsDto[]): FetchGroupsSuccessAction => ({
//   type: ContactsActionTypes.FETCH_GROUPS_SUCCESS,
//   payload: groups
// });

// export const fetchGroupsFailure = (error: string): FetchGroupsFailureAction => ({
//   type: ContactsActionTypes.FETCH_GROUPS_FAILURE,
//   payload: error
// });

// export const toggleFavorite = (contactId: ContactDto['id']): ToggleFavoriteAction => ({
//   type: ContactsActionTypes.TOGGLE_FAVORITE,
//   payload: contactId
// });

// export const setLoading = (isLoading: boolean): SetLoadingAction => ({
//   type: ContactsActionTypes.SET_LOADING,
//   payload: isLoading
// });

// export const setError = (error: string | null): SetErrorAction => ({
//   type: ContactsActionTypes.SET_ERROR,
//   payload: error
// });

// export const fetchContacts = () => {
//   return async (dispatch: any) => {
//     dispatch(fetchContactsRequest());
//     dispatch(setLoading(true));
    
//     try {
//       const response = await fetch('/api/contacts');
//       const data = await response.json();
//       dispatch(fetchContactsSuccess(data));
//     } catch (error) {
//       dispatch(fetchContactsFailure(error.message));
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };
// };

// export const fetchGroups = () => {
//   return async (dispatch: any) => {
//     dispatch(fetchGroupsRequest());
//     dispatch(setLoading(true));
    
//     try {
//       // Здесь будет реальный API-запрос
//       const response = await fetch('/api/groups');
//       const data = await response.json();
//       dispatch(fetchGroupsSuccess(data));
//     } catch (error) {
//       dispatch(fetchGroupsFailure(error.message));
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };
// };