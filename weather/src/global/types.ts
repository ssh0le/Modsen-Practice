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

export interface ForecastListItem {
    title: string,
    weatherType: WeatherType,
    temperature: number
}