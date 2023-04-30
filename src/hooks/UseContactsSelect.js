import { useSelector } from 'react-redux';
import {
  selectStoreContacts,
  selectIsLoading,
  selectError,
} from '../redux/contacts/selectors';

export const useContactsSelect = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectStoreContacts);

  return {
    isLoading,
    error,
    contacts,
  };
};
