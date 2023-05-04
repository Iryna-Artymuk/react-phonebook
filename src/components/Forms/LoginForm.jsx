import { Formik, Field, ErrorMessage, Form } from 'formik';

import * as Yup from 'yup';

// import { useDispatch } from 'react-redux';

import { Button } from '../Button/Button';
import { logIn } from '../../redux/Auth/operations';
import { useDispatch } from 'react-redux';
import css from './Forms.module.css';

export default function LogInForm({ logInModal, setLogInModal }) {
  const dispatch = useDispatch();

  const LoginValidationSchema = Yup.object().shape({
    email: Yup.string().required('login is  required'),

    password: Yup.string()
      // .min(8, 'Password must be 8 characters long')
      // .matches(/[0-9]/, 'Password requires a number')
      // .matches(/[a-z]/, 'Password requires a lowercase letter')
      // .matches(/[A-Z]/, 'Password requires an uppercase letter')
      // .matches(/[^\w]/, 'Password requires a symbol')
      .required(' password is  required'),
  });

  const handleSubmit = value => {
    // по сабміту форми буде відправлятись асинхронний  action
    // в payload якого буде обєкт UserLoginInfo
    // AuthReducer буде обробляти цей action і робити запит на бекенд щоб переіврити юзера та отримати токен
    console.log(value);
    dispatch(logIn(value));
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(value, action) => {
        console.log('login');
        handleSubmit(value);
        setLogInModal(!logInModal);
        action.resetForm();
      }}
      validationSchema={LoginValidationSchema}
    >
      <Form className={css.form}>
        <label>
          Email
          <Field
            className={css.input}
            type="text"
            name="email"
            placeholder="Enter  email"
          />
        </label>
        <ErrorMessage className={css.error} name="email" component="div" />
        <label>
          Password
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder="Enter  password"
          />
        </label>
        <ErrorMessage className={css.error} name="password" component="div" />
        <Button type="submit">Log In </Button>
      </Form>
    </Formik>
  );
}
