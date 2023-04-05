import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './ForecastLocation'
import rootSaga from "./sagas";

const sagaWiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        location: locationReducer,
    },
    middleware: [sagaWiddleware],
});

sagaWiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 