import { Label, Input } from '../Filter/Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/contactSlice';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.contacts.filter);

  const onFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };
    return (
        <Label > Find contacts by name
            <Input type="text" value={filter} onChange={onFilterChange} />
            </Label>
    )
}