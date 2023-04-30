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
import storage from 'redux-persist/lib/storage';
import { filterReducer } from '../redux/FilterByName/slice';

// import { authReducer } from '../redux/auth/slice';

//створили стор за допомогою configureStore
// імпортуали редюсери які відповідають за кожну частину стору
// для того що зберегти частину стейту в локал сторедж викоистовуєм бібліотеку react persict
// створюєм обєкт настройок authPersistConfig де вказуєм яку саме частину стейту зберегти в локалсторедж
// тоді в persistReducer передаєм обєкт настройок і uthReducer імпортований з слайсу
//експортуєм  persistor його він нам потрібен в index.js для PersistGate
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
