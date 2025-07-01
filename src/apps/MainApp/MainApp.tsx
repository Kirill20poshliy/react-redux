import {useEffect} from 'react';
import './MainApp.scss';
import {ThemeProvider} from 'react-bootstrap';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from 'src/components/Layout';
import {ContactListPage, GroupPage, ContactPage, FavoritListPage, GroupListPage} from 'src/pages';
import { useDispatch, useSelector } from 'react-redux';
import { useGetContactsQuery } from 'src/store/contacts/contactsSlice';
import { useGetGroupsQuery } from 'src/store/groups/groupsSlice';
import { addToFavorites } from 'src/store/favorites/favoritesSlice';
import { RootState } from 'src/store/store';

export const MainApp = () => {
  
  const favoriteContactsState = useSelector((state: RootState) => state.favorites)
  const {data: contactsState} = useGetContactsQuery()
  const {data: groupContactsState} = useGetGroupsQuery()

  const dispatch = useDispatch()

  useEffect(() => {
    if (contactsState?.length) {
      dispatch(addToFavorites(contactsState[0].id))
      dispatch(addToFavorites(contactsState[1].id))
      dispatch(addToFavorites(contactsState[2].id))
    }
  }, [contactsState?.length])

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
                contactsState={contactsState ?? []}
                favoriteContactsState={favoriteContactsState}
                groupContactsState={groupContactsState ?? []}
              />
            } />
            <Route path="contact">
              <Route index element={
                <ContactListPage
                  contactsState={contactsState ?? []}
                  favoriteContactsState={favoriteContactsState}
                  groupContactsState={groupContactsState ?? []}
                />
              } />
              <Route path=":contactId" element={
                <ContactPage
                  contactsState={contactsState ?? []}
                  favoriteContactsState={favoriteContactsState}
                  groupContactsState={groupContactsState ?? []}
                />
              } />
            </Route>
            <Route path="groups">
              <Route index element={
                <GroupListPage
                  contactsState={contactsState ?? []}
                  favoriteContactsState={favoriteContactsState}
                  groupContactsState={groupContactsState ?? []}
                />
              } />
              <Route path=":groupId" element={
                <GroupPage
                  contactsState={contactsState ?? []}
                  favoriteContactsState={favoriteContactsState}
                  groupContactsState={groupContactsState ?? []}
                />
              } />
            </Route>
            <Route path="favorit" element={
              <FavoritListPage
                contactsState={contactsState ?? []}
                favoriteContactsState={favoriteContactsState}
                groupContactsState={groupContactsState ?? []}
              />
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
