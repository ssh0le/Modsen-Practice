import { ForkEffect, call, put, takeLatest, } from 'redux-saga/effects'
import { setGeolocation, startFetch, setCityInfo,  fetchFailed } from '../locationSlice';
import { getCityInfo } from '@api/cityInfoByGeolocationApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { ForecastGeolocation } from '@global/types';
import { startFetch as startFetchForecast } from '@store/forecastSlice';

export function* handleGetLocationInfo(action: PayloadAction<ForecastGeolocation>): Generator<any, void, any> {
    try {
        yield put(startFetch());
        const { latitude, longitude } = action.payload;
        const response = yield call(getCityInfo, latitude, longitude);
        yield put(setCityInfo(response));
        yield put(startFetchForecast(action.payload));
      } catch (error) {
        yield put(fetchFailed());
      }
}

export function* watchGetLocationInfo(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(setGeolocation.type, handleGetLocationInfo);
}
