import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  isAuthenticated: localStorage.getItem('token') ? true : false,
};

// Create userSlice
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
  },
});
``;

// Export actions
export const { loginUser, logoutUser } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
