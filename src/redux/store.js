import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contacts/slice';
import { authReducer } from '../redux/Auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import { filterReducer } from '../redux/filter/slice';

// import { authReducer } from '../redux/auth/slice';

//створили стор за допомогою configureStore
// імпортуали редюсери які відповідають за кожну частину стору
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // filter: filterReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
