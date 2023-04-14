import { DailyForecastResponse } from "@global/types";
import { createUrlWithParameters } from "@helpers/createUrlWithParameters";
import { fetchData } from "@helpers/fetchData";

export async function getDailyForecast(lat: number, lon: number): Promise<DailyForecastResponse> {
  const apiUrl = process.env.REACT_APP_DAILY_API_URL as string;
  const apiKey = process.env.REACT_APP_DAILY_API_KEY as string;
  const parameters = {
    lat,
    lon,
    sections: 'daily',
    units: 'metric',
    key: apiKey
  }
  return await fetchData<DailyForecastResponse>(createUrlWithParameters(apiUrl, parameters));
}