import React from "react";
import { useSelector } from "react-redux";

import { ContactItem } from '../ContactItem/ContactItem';
import { ContactGroup, Item } from '../ContactList/ContactList.styled';
import { selectFilteredContacts, selectContacts } from "components/redux/selector";

export const ContactList = () => {
   const filteredContacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);

  return (
    <ContactGroup >
      {contacts.length > 0 &&
        filteredContacts.map(({ id, name, phone }) => {
        return (
          <Item  key={id}>
            <ContactItem
              id={id}
              name={name}
              number={phone}
            />
          </Item>
        );
      })}
    </ContactGroup>
  );
};


