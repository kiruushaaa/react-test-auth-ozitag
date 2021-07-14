import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/userSlice';
import authReducer from './reducers/authReducer';

export default configureStore({
  reducer: { userPage: userSlice, auth: authReducer },
});
