import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";

const combinedReducers = combineReducers({
    user : userSlice,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['user']
}

const persistedReducers = persistReducer(persistConfig, combineReducers);

export const store = configureStore({
    reducer: persistedReducers,
})

export const persistor = persistStore(store);