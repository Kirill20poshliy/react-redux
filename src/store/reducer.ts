import { ContactsState, ContactsActions, ContactsActionTypes } from './types';

const initialState: ContactsState = {
  contacts: [],
  groups: [],
  favorites: [],
};

const contactsReducer = (
  state = initialState,
  action: ContactsActions
): ContactsState => {
  switch (action.type) {
    case ContactsActionTypes.SET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      }

    case ContactsActionTypes.ADD_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts,
          action.payload
        ]
      }
    
    case ContactsActionTypes.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }

    case ContactsActionTypes.EDIT_CONTACT:
      const contactToEdit = state.contacts.find(contact => contact.id === action.payload.id)
      if (contactToEdit) {
        const editedContact = {
          ...contactToEdit,
          ...action.payload.data
        }
        return {
          ...state,
          contacts: state.contacts.map(contact => (contact.id === action.payload.id ? editedContact : contact))
        }
      }
      return state

    case ContactsActionTypes.TOGGLE_FAVORITE:
      const isFavorite = state.favorites.includes(action.payload);
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter(id => id !== action.payload)
          : [...state.favorites, action.payload]
      };

    case ContactsActionTypes.SET_GROUPS:
      return {
        ...state,
        groups: action.payload
      }

    case ContactsActionTypes.ADD_GROUP:
      return {
        ...state,
        groups: [
          ...state.groups,
          action.payload
        ]
      };
    
    case ContactsActionTypes.DELETE_GROUP:
      return {
        ...state,
        groups: state.groups.filter(group => group.id !== action.payload)
      }

    case ContactsActionTypes.EDIT_GROUP:
      const groupToEdit = state.groups.find(group => group.id === action.payload.id)
      if (groupToEdit) {
        const editedGroup = {
          ...groupToEdit,
          ...action.payload.data
        }
        return {
          ...state,
          groups: state.groups.map(group => (group.id === action.payload.id ? editedGroup : group))
        }
      }
      return state

    case ContactsActionTypes.ADD_CONTACT_TO_GROUP:
      return {
        ...state,
        groups: state.groups.map(group => 
          group.id === action.payload.groupId
            ? {
                ...group,
                contactIds: [...group.contactIds, action.payload.contactId]
              }
            : group
        )
      }
    
    case ContactsActionTypes.DELETE_CONTACT_FROM_GROUP:
      const groupToDeleteContact = state.groups.find(group => group.id === action.payload.groupId)
      if (groupToDeleteContact) {
        const filteredGroupContacts = groupToDeleteContact.contactIds.filter(contact => contact !== action.payload.contactId)
        groupToDeleteContact.contactIds = filteredGroupContacts
        return {
          ...state,
          groups: state.groups.map(group => (group.id === action.payload.groupId ? groupToDeleteContact : group))
        }
      }
      return state;

    default:
      return state;
  }
};

export default contactsReducer;
