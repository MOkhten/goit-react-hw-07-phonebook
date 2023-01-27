import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Phonebook } from './App.styled';
import { fetchContacts } from './redux/contacts.thunk';
import { Loader } from './Loader';
import { selectIsLoading, selectError } from './redux/selector';

export function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
     <Phonebook>
       <h1>Phonebook</h1>
       <ContactForm />
       <h2>Contacts</h2>
       <Filter />
     {isLoading  && <Loader />} 
       {error && <p>{error}</p>}
      <ContactList />
  </Phonebook>
  )

}
