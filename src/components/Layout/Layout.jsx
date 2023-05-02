import { Outlet } from 'react-router-dom';
// компонент який є контейнером і рендерить в собі весь контент додатку
// import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Header from '../Header/Header';
import css from './Layout.module.css';
export default function Layout({
  logInModal,
  setLogInModal,
  setRegisterModal,
  registerModal,
}) {
  return (
    <div className={css.container}>
      <Header
        LogInModal={logInModal}
        setLogInModal={setLogInModal}
        registerModal={registerModal}
        setRegisterModal={setRegisterModal}
      />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
}
