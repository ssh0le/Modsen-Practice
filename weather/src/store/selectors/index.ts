import { RootState } from "..";
import { Day } from "@api/dailyForecastApi";
import { Hourly } from "@api/hourlyForecastApi";
import { ForecastGeolocation } from "@global/types";
import { CityInfoResponse } from "@api/cityInfoByGeolocationApi";

export const selectGeolocation = (state: RootState): ForecastGeolocation| null => state.location.geolocation;
export const selectLocationInfo = (state: RootState): CityInfoResponse | null => state.location.locationInfo;

export const selectFetchTime = (state: RootState): string | null => state.forecast.fetchTime;

export const selectDaily = (state: RootState): Day[] | undefined => state.forecast.daily?.daily.data;
export const selectTimeZone = (state: RootState): string | undefined => state.forecast.daily?.timezone;
export const selectToday = (state: RootState): Day | undefined => state.forecast.daily?.daily.data[0];

export const selectSunrises = (state: RootState): string[] | undefined => state.forecast.hourly?.daily.sunrise;
export const selectSunsets = (state: RootState): string[] | undefined => state.forecast.hourly?.daily.sunset;

export const selectHourly = (state: RootState): Hourly | undefined => state.forecast.hourly?.hourly;