import PropTypes from 'prop-types';
import { useDispatch} from 'react-redux';
import { ItemInfo, Button } from '../ContactItem/ContactItem.styles';
import { deleteContact } from "components/redux/contactSlice";


export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch(); 
  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <ItemInfo>{name}</ItemInfo>
      <ItemInfo>{number}</ItemInfo>
      <Button
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};