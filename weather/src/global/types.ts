export enum WeatherType {
    ClearSky,
    Overcast,
    Cloudly,
    Fog,
    Drizzle,
    Rain,
    Snow,
    SnowRain,
    Thunderstorm,
    Unknown,
    Hail
}

export enum DayPeriod {
    Day,
    Night
}

export interface ForecastGeolocation {
    latitude: number,
    longitude: number
}

export interface DayForecast {
    time: string,
    weatherType: WeatherType,
    temperature: number
}

export interface HourForecast extends DayForecast {
    dayPeriod: DayPeriod
}

export interface Event {
    date: string,
}