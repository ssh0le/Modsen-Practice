import { createUrlWithParameters } from "../helpers/createUrlWithParameters";

const apiUrl = "https://www.meteosource.com/api/v1/free/point";
const apiKey = "s94h5aofifvxqiwfrosuq2mqw9qzb0771hdkatdq";

export interface DailyForecastResponse {
    lat: string
    lon: string
    elevation: number
    timezone: string
    units: string
    current: any
    hourly: any
    daily: Daily
  }
  
  interface Daily {
    data: Daum[]
  }
  
  interface Daum {
    day: string
    weather: string
    icon: number
    summary: string
    all_day: AllDay
    morning: any
    afternoon: any
    evening: any
  }
  
  interface AllDay {
    weather: string
    icon: number
    temperature: number
    temperature_min: number
    temperature_max: number
    wind: Wind
    cloud_cover: CloudCover
    precipitation: Precipitation
  }
  
  interface Wind {
    speed: number
    dir: string
    angle: number
  }
  
  interface CloudCover {
    total: number
  }
  
  interface Precipitation {
    total: number
    type: string
  }
  

export function getDailyForecastUrl(lat: number, lon: number): string {
    const parameters ={
        lat,
        lon,
        sections: 'daily',
        units: 'metric',
        key: apiKey
    }
    return createUrlWithParameters(apiUrl, parameters);
}