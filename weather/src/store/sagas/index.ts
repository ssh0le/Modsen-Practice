import {all} from 'redux-saga/effects'
import { watchGetLocationInfo } from './locationSaga'

export default function* rootSaga() {
    yield all([
        watchGetLocationInfo(),
    ]);
}