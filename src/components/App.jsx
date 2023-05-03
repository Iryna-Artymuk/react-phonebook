import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivetRoute';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import HomePage from '../pages/Home/Home';
import ContactsPage from '../pages/Contacts/Contacts';
import Modal from '../components/Modal/Modal';
import LogInForm from './Forms/LoginForm';
import Registerform from './Forms/RegisterForm';
import { updateUser } from '../redux/Auth/operations';

export const App = () => {
  const [logInModal, setLogInModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              logInModal={logInModal}
              setLogInModal={setLogInModal}
              registerModal={registerModal}
              setRegisterModal={setRegisterModal}
            />
          }
        >
          <Route index element={<HomePage />} />

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>

      {logInModal && (
        <Modal togglModal={() => setLogInModal(!logInModal)}>
          <LogInForm logInModal={logInModal} setLogInModal={setLogInModal} />
        </Modal>
      )}
      {registerModal && (
        <Modal togglModal={() => setRegisterModal(!registerModal)}>
          <Registerform
            registerModal={registerModal}
            setRegisterModal={setRegisterModal}
          />
        </Modal>
      )}
    </div>
  );
};
