import { Label, Input } from '../Filter/Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/contactSlice';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.contacts.filter);

  const onFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };
    return (
        <Label > Find contacts by name
            <Input type="text" value={filter} onChange={(e) => onFilterChange(e.target.value)} />
            </Label>
    )
}