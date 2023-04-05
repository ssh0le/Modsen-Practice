import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DailyForecastResponse } from "@api/dailyForecastApi";
import { HourlyForecastResponse } from "@api/hourlyForecastApi";

interface WeatherForecastState {
    isLoading: boolean,
    daily: DailyForecastResponse | null,
    hourly: HourlyForecastResponse | null
    isError: boolean,
}

const initialState: WeatherForecastState = {
    isLoading: true,
    daily: null,
    hourly: null,
    isError: false
}

const weatherForecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {
         startFetch: (state) => {
            state.isLoading = true;
            state.isError = false;
         },
         setDailyForecast: (state, action: PayloadAction<DailyForecastResponse>) => {
            state.daily = action.payload;
         },
         setHourlyForecast: (state, action: PayloadAction<HourlyForecastResponse>) => {
            state.hourly = action.payload;
         },
         fetchSucces: (state) => {
            state.isLoading = false;
         },
         fetchFailed: (state) => {
            state.isError = true;
            state.isLoading = false;
         }
    }
})

export const {startFetch, setDailyForecast, setHourlyForecast, fetchSucces, fetchFailed} = weatherForecastSlice.actions;
export default weatherForecastSlice.reducer;