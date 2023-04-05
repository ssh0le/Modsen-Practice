import { RootState } from "..";
import { Day } from "@api/dailyForecastApi";

export const selectGeolocation = (state: RootState) => state.location.geolocation;
export const selectLocationInfo = (state: RootState) => state.location.locationInfo;

export const selectDaily = (state: RootState): Day[] | undefined => state.forecast.daily?.daily.data;
export const selectToday = (state: RootState) => state.forecast.daily?.daily.data[0];

export const selectHourly = (state: RootState) => state.forecast.hourly?.hourly;