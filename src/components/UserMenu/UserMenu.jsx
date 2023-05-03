import { useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { useAuthSelect } from '../../hooks/UseAuthSelect';
import { logout } from '../../redux/Auth/operations';
import css from './UserMenu.module.css';
export default function UserMenu() {
  const { user } = useAuthSelect();
  const { isRefreshing } = useAuthSelect();

  const dispatch = useDispatch();
  dispatch(logout);

  return !isRefreshing ? (
    <div className={css.userWrapper}>
      <p className={css.userName}> Wellcome {user.name} </p>
      <Button onClick={() => dispatch(logout())}> Logout </Button>
    </div>
  ) : (
    <p>...refreshing user</p>
  );
}
