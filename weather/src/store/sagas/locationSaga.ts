import { call, put, takeLatest, } from 'redux-saga/effects'
import { setGeolocation, startFetch, setCityInfo,  fetchFailed } from '../locationSlice';
import { getCityInfoUrl, CityInfoResponse } from '@api/cityInfoByGeolocationApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { fetchData } from '@helpers/fetchData';
import { ForecastGeolocation } from '@global/types';
import { setData, LocalStorageItem } from '@helpers/localStorage';

function* handleGetLocationInfo(action: PayloadAction<ForecastGeolocation>) {
    try {
        yield put(startFetch());
        const { latitude, longitude } = action.payload;
        const response: CityInfoResponse = yield call(fetchData<CityInfoResponse>, getCityInfoUrl(latitude, longitude));
        yield put(setCityInfo(response));
        setData<CityInfoResponse>(response, LocalStorageItem.Location);
      } catch (error) {
        console.log(error);
        yield put(fetchFailed());
      }
}

export function* watchGetLocationInfo() {
    yield takeLatest(setGeolocation.type, handleGetLocationInfo);
}
