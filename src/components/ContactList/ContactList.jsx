import React from "react";
import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { ContactGroup, Item } from '../ContactList/ContactList.styled';
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "components/redux/selector";


export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  
  return (
    <ContactGroup >
        {contacts.map(({ id, name, number }) => {
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

ContactList.propTypes = {
 contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired, 
 })),
};
