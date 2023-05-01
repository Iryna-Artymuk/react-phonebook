import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  addNewContact,
  deleteContact,
} from '../contacts/operation';

// кожна операція це асинхронний запит який має 3 стани pending,rejected,fulfilled
// обробляєм кожну операцію в редюсерах і записуєм дані при fulfilled
// або обробляєм rejected
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  if (action.payload.request.status === 400) {
    state.error = ' sorry system can not creat new contact';
  }
  if (action.payload.request.status === 401) {
    state.error = ' sorry system error please  contact development team';
  }
  if (action.payload.request.status === 404) {
    state.error = 'User not found';
  }
  //   console.log(action.payload);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    sortAtoZ(state, action) {
      // const sortState = [...state].sort(function (task1, task2) {
      //   return task1.text.localeCompare(task2.text);
      // });

      state.items.sort(function (contact1, contact2) {
        return contact1.name.localeCompare(contact2.name);
      });
    },
    sortZtoA(state, action) {
      //   const sortState = [...state].sort(function (task1, task2) {
      //     return task1.text.localeCompare(task2.text);
      //   });
      state.items.sort(function (contact1, contact2) {
        return contact2.name.localeCompare(contact1.name);
      });
    },
  },
  extraReducers: {
    [fetchAllContacts.pending]: handlePending,
    [addNewContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchAllContacts.rejected]: handleRejected,
    [addNewContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,

    [fetchAllContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addNewContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      console.log(state);
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      console.log(index);
      console.log(action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { sortAtoZ, sortZtoA } = contactsSlice.actions;
