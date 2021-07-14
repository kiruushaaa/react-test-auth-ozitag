import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainContainer from './components/MainContainer/MainContainer';
import UserPage from './components/UserPage';
import LoginForm from './components/LoginForm/LoginForm';
import { getFromLocalStorage } from './redux/reducers/authReducer';

const App = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFromLocalStorage());
  }, [dispatch]);

  return (
    <div className='App'>
      <MainContainer>
        {auth.isAuthorized ? <UserPage /> : <LoginForm />}
      </MainContainer>
    </div>
  );
};

export default App;
