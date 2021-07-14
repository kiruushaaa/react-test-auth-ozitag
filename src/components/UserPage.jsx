import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../redux/reducers/userSlice';
import LogoutButton from './LogoutButton/LogoutButton';

const UserPage = () => {
  const userData = useSelector(state => state.userPage.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'User Page';
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div>
      <h2>User Page</h2>
      <div>
        <p>Name: {userData.name}</p>
        <p>E-mail: {userData.email}</p>
      </div>
      <LogoutButton />
    </div>
  );
};

export default UserPage;
