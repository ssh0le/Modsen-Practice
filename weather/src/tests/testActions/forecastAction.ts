import { DailyForecastResponse, ForecastGeolocation, HourlyForecastResponse } from "@global/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { startFetch } from "@store/forecastSlice";


export const forecastAction: PayloadAction<ForecastGeolocation> = {
    payload: {latitude: 123, longitude: 23},
    type: startFetch.type
}

export const dailyResponse: DailyForecastResponse = {
    lat: "123",
    lon: "23",
    elevation: 0,
    timezone: "Europe/Minsk",
    units: "",
    current: 'current',
    hourly: 'hourly',
    daily: {
        data: []
    }
}

export const hourlyResponse: HourlyForecastResponse = {
    latitude: 0,
    longitude: 0,
    generationtime_ms: 0,
    utc_offset_seconds: 0,
    timezone: "",
    timezone_abbreviation: "",
    elevation: 0,
    hourly_units: {time: 'time', temperature_2m: 'temp', weathercode: 'code'},
    hourly: {time: ["time"], temperature_2m: [1], weathercode: [2]},
    daily_units: {time: 'time', sunrise: "time", sunset: "time"},
    daily: {time: ['2023-04-18'], sunrise:["2023-04-18"], sunset: ["2023-04-18"]}
}