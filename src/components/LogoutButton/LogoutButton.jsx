import React from 'react';
import s from './LogoutButton.module.css';
import { useData } from '../../store/DataContext';

const LogoutButton = () => {
  const { resetValues } = useData();

  const clickHandler = () => resetValues();

  return (
    <button className={s.logoutButton} type='button' onClick={clickHandler}>
      Log Out
    </button>
  );
};

export default LogoutButton;
