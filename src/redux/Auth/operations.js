import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../../utils/token';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// допоміжна функція яка буде отриувати токен і додават його до кожного запиту

//операція реєстрації юзера
//шлях який додати до baseURL берем і документації бекенду /users/signup
// usercredentials обєкт  які отримуєм з форми реєстраціх
// піля відпрвки екшену
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      //   console.log(res.data);
      // після успігної  реєстрації треба додати отриманий токен до кожного наступного запиту
      token.set(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        `user with email ${credentials.email} already exist`
      );
    }
  }
);

// отримує credentials з форми логіна по сабміту
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      console.log(res.data);
      // після успішного   запиту  треба додати отриманий токен до кожного наступного запиту
      token.set(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('User not fount');
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const res = await axios.post('/users/logout');

    // робить запит на бекенд за адресою  axios.defaults.baseURL+ '/users/logout'
    // видаляє токен з запиту
    //  якщо успішний запит редюсер видадяє дані юзера і токен з стору змінює статус логіна на false
    token.clear();
    return res.data;
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenFromLocalStorage = state.auth.token;

    if (tokenFromLocalStorage === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to find  user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      token.set(tokenFromLocalStorage);
      const res = await axios.get('/users/current');
      //   console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
