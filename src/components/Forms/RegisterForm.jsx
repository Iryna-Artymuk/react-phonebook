import { Formik, Field, ErrorMessage, Form } from 'formik';

import * as Yup from 'yup';

import { useDispatch } from 'react-redux';

import { Button } from '../Button/Button';
import { register } from '../../redux/Auth/operations';
import css from './Forms.module.css';
export default function RegisterForm({ registerModal, setRegisterModal }) {
  const dispatch = useDispatch();

  const LoginValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is  required'),

    password: Yup.string()
      // .min(8, 'Password must be 8 characters long')
      // .matches(/[0-9]/, 'Password requires a number')
      // .matches(/[a-z]/, 'Password requires a lowercase letter')
      // .matches(/[A-Z]/, 'Password requires an uppercase letter')
      // .matches(/[^\w]/, 'Password requires a symbol')
      .required(' password is   required'),
    // email: Yup.string().email('Invalid email').required('Required'),
    email: Yup.string().required('Required'),
  });

  const handleSubmit = value => {
    // по сабміту форми буде відправлятись асинхронний  action
    // в payload якого буде обєкт UserLoginInfo
    // AuthReducer буде обробляти цей action і робити запит на бекенд щоб переіврити юзера та отримати токен

    // dispatch(register(value));
    dispatch(register(value));
    // console.log(registerModal);
    setRegisterModal(!registerModal);
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={(value, action) => {
        handleSubmit(value);
        action.resetForm();
      }}
      validationSchema={LoginValidationSchema}
    >
      <Form className={css.form}>
        <label>
          Name
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Enter name"
          />
        </label>
        <ErrorMessage className={css.error} name="name" component="div" />

        <label>
          Email
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </label>
        <ErrorMessage className={css.error} name="email" component="div" />
        <label>
          Password
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder="Enter password"
          />
        </label>
        <ErrorMessage className={css.error} name="password" component="div" />

        <Button type="submit"> Register </Button>
      </Form>
    </Formik>
  );
}
