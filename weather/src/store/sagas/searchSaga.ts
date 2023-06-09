import { call, put, takeLatest, delay, ForkEffect} from 'redux-saga/effects'
import { setResults, findCities, searchFailed, stopSearching} from '@store/citySearchSlice'
import { PayloadAction } from '@reduxjs/toolkit'
import { getFoundedCities } from '@api/citySearchApi'

export function* handleSearchCities(action: PayloadAction<string>): Generator<any, void, any> {
    try {
        if (action.payload.trim().length === 0) {
            yield put(stopSearching());
            return;
        }
        yield delay(800);
        const response = yield call(getFoundedCities, action.payload);
        yield put(setResults(response));
    }
    catch (error) {
        yield put(searchFailed());
    }
}

export function* watchHandleSearchCities(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(findCities.type, handleSearchCities);
}