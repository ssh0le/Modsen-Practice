import { call, put, takeEvery, select } from 'redux-saga/effects'
import { setGeolocation, startFetch, setCityInfo, fetchFailed} from '../ForecastLocation';
import { getCityInfoUrl } from '../../APIs/cityInfoByGeolocationApi';
import { CityInfoResponse } from '../../APIs/cityInfoByGeolocationApi';
import { RootState } from '..';
import axios from 'axios';

const getLocation = (state: RootState) => state.location;
type FetchDataType<T> = (url: string) => Promise<T>;

function* handleGetLocation() {
    try {
        yield put(startFetch);
        const { latitude, longitude } = yield select(getLocation);
        const response = call<FetchDataType<CityInfoResponse>>(axios.get, getCityInfoUrl(latitude, longitude));
        console.log(response);
        
    }
    catch (error) {
        yield put(fetchFailed())
    }
}

export function* watchGetLocation() {
    yield takeEvery(setGeolocation.type, handleGetLocation);
}

function getLocationInfoFailed(message: any): any {
    throw new Error('Function not implemented.');
}
