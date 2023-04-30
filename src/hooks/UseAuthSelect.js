import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/Auth/selctors';
import { selectError } from 'redux/contacts/selectors';

export const useAuthSelect = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const authError = useSelector(selectError);
  return {
    isLoggedIn,
    isRefreshing,
    user,
    authError,
  };
};
