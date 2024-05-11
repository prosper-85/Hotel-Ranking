import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: localStorage.getItem('token') ? true : false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state) => {
      localStorage.setItem('token', 'user_token');
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      localStorage.removeItem('token');
      state.isAuthenticated = false;
    },
    isAuthenticated: (state) => state.user.isAuthenticated,
  },
});
export const { loginUser, logoutUser, isAuthenticated } = userSlice.actions;
export default userSlice.reducer;
