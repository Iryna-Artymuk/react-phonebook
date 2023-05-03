import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectError,
} from '../redux/Auth/selctors';

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
