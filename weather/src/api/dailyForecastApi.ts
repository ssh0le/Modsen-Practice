import { WeatherType } from "@global/types";
import { createUrlWithParameters } from "@helpers/createUrlWithParameters";

const apiUrl = "https://www.meteosource.com/api/v1/free/point";
const apiKey = "s94h5aofifvxqiwfrosuq2mqw9qzb0771hdkatdq";

export interface DailyForecastResponse {
  lat: string
  lon: string
  elevation: number
  timezone: string
  units: string
  current: string | null
  hourly: string | null
  daily: Daily
}

export interface Daily {
  data: Day[]
}

export interface Day {
  day: string
  weather: string
  icon: number
  summary: string
  all_day: AllDay
  morning: string | null
  afternoon: string | null
  evening: string | null
}

export interface AllDay {
  weather: string
  icon: number
  temperature: number
  temperature_min: number
  temperature_max: number
  wind: Wind
  cloud_cover: CloudCover
  precipitation: Precipitation
}

export interface Wind {
  speed: number
  dir: string
  angle: number
}

export interface CloudCover {
  total: number
}

export interface Precipitation {
  total: number
  type: string
}

export function getWeatherType(icon: number): WeatherType {
  switch (icon) {
    case 2:
    case 26: return WeatherType.ClearSky;
    case 3:
    case 4:
    case 5:
    case 6:
    case 24: 
    case 27: 
    case 28: 
    case 29: 
    case 30:
    case 36: return WeatherType.Cloudly;
    case 7:
    case 8: 
    case 12:
    case 18:
    case 21:
    case 31: return WeatherType.Overcast; 
    case 9: return WeatherType.Fog;
    case 10: return WeatherType.Drizzle;
    case 11:
    case 13:
    case 32: return WeatherType.Rain;
    case 14:
    case 15:
    case 33: return WeatherType.Thunderstorm;
    case 16:
    case 17: 
    case 19:
    case 34: return WeatherType.Snow;
    case 20:
    case 22:
    case 23:
    case 35: return WeatherType.SnowRain;
    case 25: return WeatherType.Hail;
    default: return WeatherType.Unknown;
  }
}


export function getDailyForecastUrl(lat: number, lon: number): string {
  const parameters = {
    lat,
    lon,
    sections: 'daily',
    units: 'metric',
    key: apiKey
  }
  return createUrlWithParameters(apiUrl, parameters);
}