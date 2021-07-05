import React from 'react';
import s from './LoginForm.module.css';
import { useData } from '../../store/DataContext';
import { useFormik } from 'formik';
import { getAuthToken, getUserProfile } from '../../api/userAPI';
import validationSchema from './validationSchema';

const LoginForm = () => {
  const { setValues } = useData();

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      const authData = await getAuthToken(values);

      if (authData.message) {
        console.error(authData.message);

        for (let key in authData.errors) {
          setFieldError(
            authData.errors[key].fieldName,
            authData.errors[key].message
          );
        }
      } else {
        const userData = await getUserProfile(authData.data.accessToken);
        setValues({ isAuthorized: true, ...userData.data }); // this is better to delegate to reducer, but we don't have the last one
        setSubmitting(false);
      }
    },
  });

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h2>Log In Page</h2>
      <input
        className={s.inputField}
        id='email'
        name='email'
        type='text'
        value={values.email}
        onChange={handleChange}
        placeholder='E-mail here'
      />
      {touched.email && errors.email && (
        <div className={s.errorMessage}>{errors.email}</div>
      )}
      <input
        className={s.inputField}
        id='password'
        name='password'
        type='password'
        value={values.password}
        onChange={handleChange}
        placeholder='Password here'
      />
      {touched.password && errors.password && (
        <div className={s.errorMessage}>{errors.password}</div>
      )}
      <button className={s.submitButton} type='submit'>
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
