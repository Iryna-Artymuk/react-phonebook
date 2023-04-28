import { useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { useAuthSelect } from '../../hooks/UseAuthSelect';
import { logout } from '../../redux/Auth/operations';

export default function UserMenu() {
  const { user } = useAuthSelect();

  const dispatch = useDispatch();
  dispatch(logout);

  return (
    <div>
      <p> Wellcome {user.name} </p>
      <Button onClick={() => dispatch(logout())}> Logout </Button>
    </div>
  );
}
