import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';
import css from './Navigation.module.css';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  // посидання на марщрути сторінок to="/"  to="/tasks"
  // посилання на сторінку завдань відображається залежно від значення  isLoggedIn яке зберігається в store
  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink className={css.link} to="/tasks">
          Tasks
        </NavLink>
      )}
    </nav>
  );
};
