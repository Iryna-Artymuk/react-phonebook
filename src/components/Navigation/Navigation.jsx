import { NavLink } from 'react-router-dom';
import { useAuthSelect } from '../../hooks/UseAuthSelect';
import css from './Navigation.module.css';
export default function Navigation() {
  const { isLoggedIn } = useAuthSelect();
  const NavLinkStyles = ({ isActive }) => {
    return { color: isActive ? 'pink' : 'grey' };
  };
  // посидання на марщрути сторінок to="/"  to="/contacts" в App
  // посилання на сторінку завдань відображається залежно від значення  isLoggedIn яке зберігається в store
  return (
    <nav className={css.nav}>
      <NavLink className={css.link} style={NavLinkStyles} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} style={NavLinkStyles} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
