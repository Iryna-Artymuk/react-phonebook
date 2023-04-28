import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//дефолтний url з документації бекенду

// операція отримання всіх контактів запит за адресою axios.defaults.baseURL +/contacts

export const fetchAllContacts = createAsyncThunk(
  'contact/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('contacts');
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      console.log(e);
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      //thunkAPI  це обєкт в якому є різні методи для роботи з createAsyncThunk
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// операція додавання нового контакту  асинхронний запит post  за адресою axios.defaults.baseURL +/contacts
export const addNewContact = createAsyncThunk(
  'contact/addContact',
  async (newContat, thunkAPI) => {
    try {
      // в методі post передаєм в яке місце на бекенді треба додати обєкт
      // другий аргумент передаємо сам обєкт який треба додати
      // обєкт будем отримувати при сабміті фоми addContacts коли будем відправляти dispatch з функцією якій передамо обєкт нового контакту
      // цю функцію імпортужм в форму і передмо значення інпуту
      const response = await axios.post('/contacts', {
        name: newContat.name,
        number: newContat.phone_number,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// операція видалення контакту  асинхронний запит post  за адресою axios.defaults.baseURL +​/contacts​/{contactId}

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);
