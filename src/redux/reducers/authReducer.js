import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import { getAuthData } from '../../api/userAPI';

export const fetchAuthData = createAsyncThunk(
  'auth/fetchAuthData',
  async data => await getAuthData(data)
);

export const getFromLocalStorage = createAction('auth/getFromLocalStorage');
export const removeAuthData = createAction('auth/removeAuthData');

const authReducer = createReducer(
  {
    isFetching: false,
    isAuthorized: false,
    authData: {},
  },
  builder => {
    builder
      .addCase(fetchAuthData.pending, state => {
        state.isFetching = true;
      })
      .addCase(fetchAuthData.fulfilled, (state, action) => {
        if (!action.payload.message) {
          state.authData = action.payload.data;
          localStorage.setItem(
            'auth-data',
            JSON.stringify(action.payload.data)
          );
          state.isAuthorized = true;
        }
        state.isFetching = false;
      })
      .addCase(getFromLocalStorage, state => {
        const authData = JSON.parse(localStorage.getItem('auth-data')) || {};
        state.authData = authData;
        state.isAuthorized = Object.keys(authData).length !== 0;
      })
      .addCase(removeAuthData, state => {
        localStorage.removeItem('auth-data');
        state.isAuthorized = false;
        state.authData = {};
      });
  }
);

export default authReducer;
