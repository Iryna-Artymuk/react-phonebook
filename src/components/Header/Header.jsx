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
  const { isRefreshing } = useAuthSelect();
  const { authError } = useAuthSelect();
  // console.log(authError);
  return (
    <header className={css.header}>
      <Navigation />

      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div>
          {!isRefreshing ? (
            <div className={css.headerButtonsWrapper}>
              <Button onClick={() => setLogInModal(!logInModal)}>
                Log in{' '}
              </Button>
              <Button onClick={() => setRegisterModal(!registerModal)}>
                Register
              </Button>
            </div>
          ) : (
            <p className={css.refreshingtext}> refreshing user</p>
          )}
          {authError && <p className={css.loginError}>User not found :(</p>}
        </div>
      )}
    </header>
  );
}
