import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DailyForecastResponse } from "@api/dailyForecastApi";

interface DailyForecastState {
    isLoading: boolean,
    data: DailyForecastResponse | null,
    error: string | null,
}

const initialState: DailyForecastState = {
    isLoading: false,
    data: null,
    error: null
}

const dailyForecastSlice = createSlice({
    name: 'dailyForecast',
    initialState,
    reducers: {
         
    }
})