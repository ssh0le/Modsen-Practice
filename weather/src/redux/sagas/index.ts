import {all} from 'redux-saga/effects'
import { watchGetLocation } from './locationSaga'

export default function* rootSaga() {
    yield all([
        watchGetLocation()
    ]);
}