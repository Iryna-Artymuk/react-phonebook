import Navigation from '../Navigation/Navigation';
import { Button } from 'components/Button/Button';
import UserMenu from '../UserMenu/UserMenu';
import { useAuthSelect } from '../../hooks/UseAuthSelect';
import css from './Header.module.css';
export default function Header({
  logInModal,
  setLogInModal,
  registerModal,
  setRegisterModal,
}) {
  const { isLoggedIn } = useAuthSelect();

  return (
    <header className={css.header}>
      <Navigation />

      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div className={css.headerButtonsWrapper}>
          <Button onClick={() => setLogInModal(!logInModal)}>Log in </Button>
          <Button onClick={() => setRegisterModal(!registerModal)}>
            Register
          </Button>
        </div>
      )}
    </header>
  );
}
