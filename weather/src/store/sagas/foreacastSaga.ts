import { ForkEffect, call, put, takeLatest} from 'redux-saga/effects'
import { startFetch, fetchFailed, setDailyForecast, setHourlyForecast, fetchSucces } from '@store/forecastSlice'
import { PayloadAction } from '@reduxjs/toolkit';
import { getHourlyForecast } from '@api/hourlyForecastApi';
import { getDailyForecast } from '@api/dailyForecastApi';
import { ForecastGeolocation } from '@global/types';

function* handleFetchForecast(action: PayloadAction<ForecastGeolocation>): Generator<any, void, any>
{
    try {
        const { latitude, longitude } = action.payload;
        const dailyResponse = yield call(getDailyForecast, latitude, longitude);
        const timeZone = dailyResponse.timezone.replace('/', '%2F');
        const hourlyResponse = yield call(getHourlyForecast, latitude, longitude, timeZone);
        yield put(setDailyForecast(dailyResponse));
        yield put(setHourlyForecast(hourlyResponse));
        yield put(fetchSucces());
    }
    catch(error) {
        yield put(fetchFailed());
    }
}

export function* watchHandleFetchForecast(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(startFetch.type, handleFetchForecast)
}