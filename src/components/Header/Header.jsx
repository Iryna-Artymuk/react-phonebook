import Navigation from '../Navigation/Navigation';
import { Button } from 'components/Button/Button';
import UserMenu from '../UserMenu/UserMenu';
import { useAuthSelect } from '../../hooks/UseAuthSelect';

export default function Header({
  logInModal,
  setLogInModal,
  registerModal,
  setRegisterModal,
}) {
  const { isLoggedIn } = useAuthSelect();

  return (
    <header>
      <Navigation />

      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div>
          <Button onClick={() => setLogInModal(!logInModal)}>Log in </Button>
          <Button onClick={() => setRegisterModal(!registerModal)}>
            Register
          </Button>
        </div>
      )}
    </header>
  );
}
