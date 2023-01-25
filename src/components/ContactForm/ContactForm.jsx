import React, { useState } from 'react';

import { Form, FormTitle, Button, Input } from './ContactForm.styled';
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
import { addContact } from 'components/redux/contactSlice';


export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector((state) => state.contacts.contacts);
   const dispatch = useDispatch(); 

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        throw new Error('Unexpected type of field');
    }
  };

  
  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is is already in contacts.`);
    } else {
    dispatch(
        addContact({
          id: nanoid(),
          name: name,
          number: number,
        })
      );
      reset();
    }
  };
  
  
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <Form onSubmit={handleSubmit}>
                 <FormTitle>Name</FormTitle>
                 <Input
                    value={name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={handleChange}
          
                    required />
                <FormTitle>Number</FormTitle>
                <Input
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    onChange={handleChange}
                    required />
                <Button type="submit" >
                    Add contact
                </Button>
            </Form>
  )
}


    

