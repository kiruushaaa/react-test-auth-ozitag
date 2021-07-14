import React from 'react';
import { useDispatch } from 'react-redux';
import s from './LogoutButton.module.css';
import { unsetUser } from '../../redux/reducers/userSlice';
import { removeAuthData } from '../../redux/reducers/authReducer';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(unsetUser());
    dispatch(removeAuthData());
  };

  return (
    <button className={s.logoutButton} type='button' onClick={clickHandler}>
      Log Out
    </button>
  );
};

export default LogoutButton;
