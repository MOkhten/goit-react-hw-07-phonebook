import React from "react";

import { ContactItem } from '../ContactItem/ContactItem';
import { ContactGroup, Item } from '../ContactList/ContactList.styled';
import { useSelector } from "react-redux";
import { selectContacts} from "components/redux/selector";
// import { selectFilteredContacts, selectContacts} from "components/redux/selector";
export const ContactList = () => {
  // const filteredContacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);

  return (
    <ContactGroup >
      { contacts.length > 0 &&
        contacts.map(({ id, name, phone }) => {
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


