import {call, put, takeLatest} from 'redux-saga/effects'
import { startFetch, fetchFailed, setDailyForecast, setHourlyForecast, fetchSucces } from '@store/forecastSlice'
import { fetchData } from '@helpers/fetchData';
import { PayloadAction } from '@reduxjs/toolkit';
import { getHourlyForecastUrl, HourlyForecastResponse } from '@api/hourlyForecastApi';
import { getDailyForecastUrl, DailyForecastResponse } from '@api/dailyForecastApi';
import { ForecastGeolocation } from '@global/types';

function* handleFetchForecast(action: PayloadAction<ForecastGeolocation>) {
    try {
        const { latitude, longitude } = action.payload;
        const dailyResponse: DailyForecastResponse = yield call(fetchData<DailyForecastResponse>, getDailyForecastUrl(latitude, longitude));
        const timeZone = dailyResponse.timezone.replace('/', '%2F');
        const hourlyResponse: HourlyForecastResponse = yield call(fetchData<HourlyForecastResponse>, getHourlyForecastUrl(latitude, longitude, timeZone));
        yield put(setDailyForecast(dailyResponse));
        yield put(setHourlyForecast(hourlyResponse));
        yield put(fetchSucces());
    }
    catch(error) {
        yield put(fetchFailed());
    }
}

export function* watchHandleFetchForecast() {
    yield takeLatest(startFetch.type, handleFetchForecast)
}