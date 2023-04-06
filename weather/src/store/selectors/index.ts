import { RootState } from "..";
import { Day } from "@api/dailyForecastApi";
import { Hourly } from "@api/hourlyForecastApi";

export const selectGeolocation = (state: RootState) => state.location.geolocation;
export const selectLocationInfo = (state: RootState) => state.location.locationInfo;

export const selectFetchTime = (state: RootState) => state.forecast.fetchTime;

export const selectDaily = (state: RootState): Day[] | undefined => state.forecast.daily?.daily.data;
export const selectToday = (state: RootState) => state.forecast.daily?.daily.data[0];

export const selectHourly = (state: RootState): Hourly | undefined => state.forecast.hourly?.hourly;