import { ContactsState, ContactsActions, ContactsActionTypes } from './types';
import { DATA_CONTACT, DATA_GROUP_CONTACT } from 'src/__data__';

const initialState: ContactsState = {
  contacts: DATA_CONTACT,
  groups: DATA_GROUP_CONTACT,
  favorites: [],
};

const contactsReducer = (
  state = initialState,
  action: ContactsActions
): ContactsState => {
  switch (action.type) {
    case ContactsActionTypes.FETCH_CONTACTS_REQUEST:
      return {
        ...state,
      };
      
    case ContactsActionTypes.FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
      };
      
    case ContactsActionTypes.FETCH_CONTACTS_FAILURE:
      return {
        ...state,
      };
      
    case ContactsActionTypes.FETCH_GROUPS_REQUEST:
      return {
        ...state,
      };
      
    case ContactsActionTypes.FETCH_GROUPS_SUCCESS:
      return {
        ...state,
        groups: action.payload,
      };
      
    case ContactsActionTypes.FETCH_GROUPS_FAILURE:
      return {
        ...state,
      };
      
    case ContactsActionTypes.TOGGLE_FAVORITE:
      const isFavorite = state.favorites.includes(action.payload);
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter(id => id !== action.payload)
          : [...state.favorites, action.payload]
      };
      
    case ContactsActionTypes.SET_LOADING:
      return {
        ...state,
      };
      
    case ContactsActionTypes.SET_ERROR:
      return {
        ...state,
      };
      
    default:
      return state;
  }
};

export default contactsReducer;
