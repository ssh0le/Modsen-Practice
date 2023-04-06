import {all} from 'redux-saga/effects'
import { watchGetLocationInfo } from './locationSaga'
import { watchHandleFetchForecast } from './foreacastSaga';

export default function* rootSaga() {
    yield all([
        watchGetLocationInfo(),
        watchHandleFetchForecast()
    ]);
}