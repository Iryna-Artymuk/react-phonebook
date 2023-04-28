import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// допоміжна функція яка буде отриувати токен і додават його до кожного запиту
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
//операція реєстрації юзера
//шлях який додати до baseURL берем і документації бекенду /users/signup
// usercredentials обєкт  які отримуєм з форми реєстраціх
// піля відпрвки екшену
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      console.log(res.data);
      // після успігної  реєстрації треба додати отриманий токен до кожного наступного запиту
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
