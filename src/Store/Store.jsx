import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./Reducers/Messages.reducers";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
 
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, messagesReducer)

const store = configureStore({
  reducer: {messages: persistedReducer},
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, PAUSE, PURGE, REHYDRATE, REGISTER, PERSIST],
    },
  })
});

const persistor = persistStore(store);

export default store;
export {persistor}