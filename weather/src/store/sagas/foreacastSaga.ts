import {call, put} from 'redux-saga/effects'
import { startFetch, fetchFailed, setDailyForecast, setHourlyForecast, fetchSucces } from '@store/forecastSlice'
import { fetchData } from '@helpers/fetchData';
import { PayloadAction } from '@reduxjs/toolkit';
import { getHourlyForecastUrl, HourlyForecastResponse } from '@api/hourlyForecastApi';
import { getDailyForecastUrl, DailyForecastResponse } from '@api/dailyForecastApi';
import { ForecastGeolocation } from '@global/types';

export function* handleFetchForecast(action: PayloadAction<ForecastGeolocation>) {
    try {
        yield put(startFetch());
        const { latitude, longitude } = action.payload;
        const dailyResponse: DailyForecastResponse = yield call(fetchData<DailyForecastResponse>, getDailyForecastUrl(latitude, longitude));
        const hourlyResponse: HourlyForecastResponse = yield call(fetchData<HourlyForecastResponse>, getHourlyForecastUrl(latitude, longitude));
        yield put(setDailyForecast(dailyResponse));
        yield put(setHourlyForecast(hourlyResponse));
        yield put(fetchSucces());
    }
    catch(error) {
        yield put(fetchFailed());
    }
}