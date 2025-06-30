import {useEffect} from 'react';
import './MainApp.scss';
import {ThemeProvider} from 'react-bootstrap';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from 'src/components/Layout';
import {ContactListPage, GroupPage, ContactPage, FavoritListPage, GroupListPage} from 'src/pages';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { fetchContacts, fetchGroups, toggleFavoriteActionCreator } from 'src/store/actions';

export const MainApp = () => {
  
  const contactsState = useAppSelector(state => state.contacts.contacts)
  const groupContactsState = useAppSelector(state => state.contacts.groups)
  const favoriteContactsState = useAppSelector(state => state.contacts.favorites)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
    dispatch(fetchGroups())
  }, [])

  useEffect(() => {
    if (contactsState.length) {
      dispatch(toggleFavoriteActionCreator(contactsState[0].id))
      dispatch(toggleFavoriteActionCreator(contactsState[1].id))
      dispatch(toggleFavoriteActionCreator(contactsState[2].id))
    }
  }, [contactsState.length])

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <ContactListPage
                contactsState={contactsState}
                favoriteContactsState={favoriteContactsState}
                groupContactsState={groupContactsState}
              />
            } />
            <Route path="contact">
              <Route index element={
                <ContactListPage
                  contactsState={contactsState}
                  favoriteContactsState={favoriteContactsState}
                  groupContactsState={groupContactsState}
                />
              } />
              <Route path=":contactId" element={
                <ContactPage
                  contactsState={contactsState}
                  favoriteContactsState={favoriteContactsState}
                  groupContactsState={groupContactsState}
                />
              } />
            </Route>
            <Route path="groups">
              <Route index element={
                <GroupListPage
                  contactsState={contactsState}
                  favoriteContactsState={favoriteContactsState}
                  groupContactsState={groupContactsState}
                />
              } />
              <Route path=":groupId" element={
                <GroupPage
                  contactsState={contactsState}
                  favoriteContactsState={favoriteContactsState}
                  groupContactsState={groupContactsState}
                />
              } />
            </Route>
            <Route path="favorit" element={
              <FavoritListPage
                contactsState={contactsState}
                favoriteContactsState={favoriteContactsState}
                groupContactsState={groupContactsState}
              />
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
