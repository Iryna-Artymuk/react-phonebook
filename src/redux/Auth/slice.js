import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logout, updateUser } from '../Auth/operations';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  authError: null,
};

// name буде додаватись до кожного екшену
// register.fulfilled  редюсер який повертає відповідь з бекенду в файліoperations
// в цій відповіді є токен який згенерував бекенд в ньому звшифрованй ідентифікатор юзера
// записуєм в стор юзера і токен та змінюєм статус
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected](state, action) {
      state.authError = action.payload;
      console.log(action.payload);
    },
    [logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [updateUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [updateUser.rejected](state, action) {
      state.authError = action.payload;
      state.isRefreshing = false;
    },
    [updateUser.pending](state) {
      state.isRefreshing = true;
    },
  },
});

export const authReducer = authSlice.reducer;
