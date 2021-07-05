import React from 'react';
import MainContainer from './components/MainContainer/MainContainer';
import UserPage from './components/UserPage';
import LoginForm from './components/LoginForm/LoginForm';
import { useData } from './store/DataContext';

const App = () => {
  const { data } = useData();

  return (
    <div className='App'>
      <MainContainer>
        {data.isAuthorized ? <UserPage /> : <LoginForm />}
      </MainContainer>
    </div>
  );
};

export default App;
