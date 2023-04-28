import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logout } from '../Auth/operations';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
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
    [logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
