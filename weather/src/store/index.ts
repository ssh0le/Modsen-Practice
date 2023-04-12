import createSagaMiddleware from "@redux-saga/core";
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import locationReducer from './locationSlice';
import forecastReducer from './forecastSlice';
import searchReducer from "./citySearchSlice";
import eventsReducer from "./eventsSlice";
import rootSaga from "./sagas";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";

const sagaWiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    location: locationReducer,
    forecast: forecastReducer,
    search: searchReducer,
    events: eventsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(sagaWiddleware),
});

sagaWiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 