import PropTypes from 'prop-types';
import { useDispatch} from 'react-redux';
import { ItemInfo, Button } from '../ContactItem/ContactItem.styles';
import { deleteContact } from '../redux/contacts.thunk';


export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch(); 
  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <ItemInfo>{name}</ItemInfo>
      <ItemInfo>{number}</ItemInfo>
      <Button
        type="button"
        onClick={onDeleteContact}
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