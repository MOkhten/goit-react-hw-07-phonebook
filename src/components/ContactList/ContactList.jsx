import React from "react";

import { ContactItem } from '../ContactItem/ContactItem';
import { ContactGroup, Item } from '../ContactList/ContactList.styled';
import { useSelector } from "react-redux";
import { selectFilteredContacts} from "components/redux/selector";

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  // const contacts = useSelector(selectContacts);
  console.log(filteredContacts)
  return (
    <ContactGroup >
      {
        filteredContacts.map(({ id, name, number }) => {
        return (
          <Item  key={id}>
            <ContactItem
              id={id}
              name={name}
              number={number}
            />
          </Item>
        );
      })}
    </ContactGroup>
  );
};


