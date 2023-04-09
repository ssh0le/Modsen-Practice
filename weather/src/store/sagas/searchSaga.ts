import { call, put, takeLatest, delay } from 'redux-saga/effects'
import { setResults, findCities, searchFailed } from '@store/citySearchSlice'
import { PayloadAction } from '@reduxjs/toolkit'
import { getFoundedCities, FoundedCitiesResponse } from '@api/citySearchApi'

function* handleSearchCities(action: PayloadAction<string>) {
    try {
        yield delay(800);
        const response: FoundedCitiesResponse = yield call(getFoundedCities, action.payload);
        yield put(setResults(response));
    }
    catch (error) {
        yield put(searchFailed());
    }
}

export function* watchHandleSearchCities() {
    yield takeLatest(findCities.type, handleSearchCities);
}