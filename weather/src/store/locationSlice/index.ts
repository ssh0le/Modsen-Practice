import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ForecastGeolocation, CityInfoResponse } from "@global/types";

export interface LocationState {
    geolocation: ForecastGeolocation | null,
    isLoading: boolean,
    error: boolean,
    locationInfo: CityInfoResponse | null,
}

const initialState: LocationState = {
    isLoading: true,
    error: false,
    locationInfo: null,
    geolocation: null
}

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setGeolocation: (state, action: PayloadAction<ForecastGeolocation>) => {
            state.geolocation = action.payload;
        },
        startFetch: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        setCityInfo: (state, action: PayloadAction<CityInfoResponse>) => {
            state.isLoading = false;
            state.locationInfo = action.payload;
        },
        fetchFailed: (state) => {
            state.isLoading = false;
            state.error = true;
        }
    }
});

export const {setGeolocation, startFetch, setCityInfo, fetchFailed} = locationSlice.actions;
export default locationSlice.reducer;