import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserProfile } from '../../api/userAPI';

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (_, { getState }) => {
    const data = getState().auth.authData;
    const responce = await getUserProfile(data);
    return responce.data;
  }
);

const initialState = {
  userData: {
    id: '',
    name: '',
    email: '',
  },
};

const userSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    unsetUser: state => {
      state.userData = initialState.userData;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      userSlice.caseReducers.setUser(state, action);
    });
  },
});

export const { unsetUser } = userSlice.actions;
export default userSlice.reducer;
