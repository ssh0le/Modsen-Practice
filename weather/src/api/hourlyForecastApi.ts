import { createUrlWithParameters } from "@helpers/createUrlWithParameters";
import { HourlyForecastResponse } from "@global/types";
import { fetchData } from "@helpers/fetchData";

export async function getHourlyForecast(latitude: number, longitude: number, timezone: string): Promise<HourlyForecastResponse> {
  const apiUrl = process.env.REACT_APP_HOURLY_API_URL as string;
  const parameters = {
    latitude,
    longitude,
    timezone,
    daily: "sunrise,sunset",
    hourly: "temperature_2m,weathercode",
    forecast_days: 3,
  }
  return await fetchData<HourlyForecastResponse>(createUrlWithParameters(apiUrl, parameters));
}