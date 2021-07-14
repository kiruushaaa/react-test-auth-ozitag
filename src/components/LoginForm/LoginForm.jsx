import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import s from './LoginForm.module.css';
import validationSchema from './validationSchema';
import { fetchAuthData } from '../../redux/reducers/authReducer';

const LoginForm = () => {
  const authData = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Login page';
  }, []);

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      const responce = await dispatch(fetchAuthData(values));

      if (responce.payload.message) {
        const { message, errors } = responce.payload;

        console.warn(message);
        Object.keys(errors).forEach(key => {
          setFieldError(errors[key].fieldName, errors[key].message);
        });
      }

      setSubmitting(false);
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
      <button
        className={s.submitButton}
        type='submit'
        disabled={authData.isFetching}>
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
