import { Outlet } from 'react-router-dom';
// компонент який є контейнером і рендерить в собі весь контент додатку
// import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Header from '../Header/Header';
export default function Layout({
  logInModal,
  setLogInModal,
  setRegisterModal,
  registerModal,
}) {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
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
