
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Phonebook } from './App.styled';


export function App() {

  return (
     <Phonebook>
       <h1>Phonebook</h1>
       <ContactForm />
       <h2>Contacts</h2>
       <Filter />
     <ContactList/>
  </Phonebook>
  )

}
