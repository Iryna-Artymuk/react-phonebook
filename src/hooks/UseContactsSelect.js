import { useSelector } from 'react-redux';
import {
  selectStoreContacts,
  selectIsLoading,
  selectError,
  selectFiteredContats,
} from '../redux/contacts/selectors';

export const useContactsSelect = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectStoreContacts);
  const filteredContacts = useSelector(selectFiteredContats);
  return {
    isLoading,
    error,
    contacts,
    filteredContacts,
  };
};
