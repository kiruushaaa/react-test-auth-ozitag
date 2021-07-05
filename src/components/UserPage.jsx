import React from 'react';
import LogoutButton from './LogoutButton/LogoutButton';
import { useData } from '../store/DataContext';

const UserPage = () => {
  const { data } = useData();

  return (
    <div>
      <h2>User Page</h2>
      <p>Name: {data.name}</p>
      <p>E-mail: {data.email}</p>
      <LogoutButton />
    </div>
  );
};

export default UserPage;
