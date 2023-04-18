/* eslint-disable @typescript-eslint/promise-function-async */
import { expectSaga } from 'redux-saga-test-plan';
import { handleGetLocationInfo } from '@store/sagas/locationSaga';
import { startFetch, setCityInfo, fetchFailed, setGeolocation } from '@store/locationSlice';
import { getCityInfo } from '@api/cityInfoByGeolocationApi';
import { fetchSucces, setDailyForecast, setHourlyForecast, startFetch as startFetchForecast } from '@store/forecastSlice';
import { locationAction, locationResponse } from './testActions/locationAction';
import { searchAction, invalidSearchAction } from './testActions/searchAction';
import { call } from 'redux-saga/effects';
import { handleSearchCities } from '@sagas/searchSaga';
import { getFoundedCities } from '@api/citySearchApi';
import { setResults, stopSearching } from '@store/citySearchSlice';
import { FoundedCitiesResponse } from '@global/types';
import { dailyResponse, forecastAction, hourlyResponse } from './testActions/forecastAction';
import { getDailyForecast } from '@api/dailyForecastApi';
import { getHourlyForecast } from '@api/hourlyForecastApi';
import { handleFetchForecast } from '@sagas/foreacastSaga';

describe('location saga', () => {
    it('fetch success', () => {
        return expectSaga(handleGetLocationInfo, locationAction)
            .put(startFetch())
            .provide([
                [call(getCityInfo, locationAction.payload.latitude, locationAction.payload.longitude), locationResponse]
            ])
            .put(setCityInfo(locationResponse))
            .put(startFetchForecast(locationAction.payload))
            .run();
    });

    it('fetch failed', () => {
        const actionPayload = { latitude: 12.34, longitude: 56.78 };
        const error = new Error('Failed to fetch city info');
        return expectSaga(handleGetLocationInfo, setGeolocation(actionPayload))
            .provide([
                [call(getCityInfo, actionPayload.latitude, actionPayload.longitude), Promise.reject(error)],
            ])
            .put(startFetch())
            .put(fetchFailed())
            .run();
    })
});

jest.mock('redux-saga/effects', () => {
    const originalEffects = jest.requireActual('redux-saga/effects');
    return {
        ...originalEffects,
        delay: (ms: number) => ({ type: 'DELAY', ms }),
    };
});

describe('search cities saga', () => {
    it('valid payload', () => {
        const res: FoundedCitiesResponse = [{ name: 'Mogilev', country: 'Belarus', lat: 11, lon: 22 }];
        return expectSaga(handleSearchCities, searchAction)
            .provide([[call(getFoundedCities, searchAction.payload), res]])
            .put(setResults(res))
            .run()
    });

    it('invalid payload', () => {
        return expectSaga(handleSearchCities, invalidSearchAction)
            .put(stopSearching())
            .run();
    })
});

describe('forecast saga', () => {
    it('is fetching', () => {
        const { latitude, longitude } = forecastAction.payload;
        return expectSaga(handleFetchForecast, forecastAction)
            .provide([[call(getDailyForecast, latitude, longitude), dailyResponse],
            [call(getHourlyForecast, latitude, longitude, dailyResponse.timezone.replace('/', '%2F')), hourlyResponse]])
            .put(setDailyForecast(dailyResponse))
            .put(setHourlyForecast(hourlyResponse))
            .put(fetchSucces())
            .run();
    })
})
