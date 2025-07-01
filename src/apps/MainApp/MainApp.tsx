import {useEffect} from 'react';
import './MainApp.scss';
import {ThemeProvider} from 'react-bootstrap';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from 'src/components/Layout';
import {ContactListPage, GroupPage, ContactPage, FavoritListPage, GroupListPage} from 'src/pages';
import { observer } from 'mobx-react-lite';
import favoritesStore from 'src/store/favorites/favoritesStore';
import contactsStore from 'src/store/contacts/contactsStore';
import groupsStore from 'src/store/groups/groupsStore';

export const MainApp = observer(() => {

  const favoriteContactsState = favoritesStore.favorites
  const contactsState = contactsStore.contacts
  const groupContactsState = groupsStore.groups

  useEffect(() => {
    if (contactsState?.length) {
      favoritesStore.setFavorites(contactsState[0].id)
      favoritesStore.setFavorites(contactsState[1].id)
      favoritesStore.setFavorites(contactsState[2].id)
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
})
