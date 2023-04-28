import { NavLink } from 'react-router-dom';
import { useAuthSelect } from '../../hooks/UseAuthSelect';
import css from './Navigation.module.css';
export default function Navigation() {
  const { isLoggedIn } = useAuthSelect();
  // посидання на марщрути сторінок to="/"  to="/contacts" в App
  // посилання на сторінку завдань відображається залежно від значення  isLoggedIn яке зберігається в store
  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
