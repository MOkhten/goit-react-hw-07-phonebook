import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Phonebook } from './App.styled';
import { fetchContacts } from './redux/contacts.thunk';
import { Loader } from './Loader';

export function App() {
  const isLoading = state => state.contacts.isLoading;
  const error = state => state.contacts.error;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  console.log(fetchContacts);
  return (
     <Phonebook>
       <h1>Phonebook</h1>
       <ContactForm />
       <h2>Contacts</h2>
       <Filter />
     {isLoading && !error && <Loader />}
      {error && <p>{error}</p>}
      {!isLoading && <ContactList />}
  </Phonebook>
  )

}
