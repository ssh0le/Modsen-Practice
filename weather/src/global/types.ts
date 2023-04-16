export interface HourlyForecastResponse {
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: string
    timezone_abbreviation: string
    elevation: number
    hourly_units: HourlyUnits
    hourly: Hourly
    daily_units: DailyUnits
    daily: DailyForecast
}

export interface HourlyUnits {
    time: string
    temperature_2m: string
    weathercode: string
}

export interface Hourly {
    time: string[]
    temperature_2m: number[]
    weathercode: number[]
}

export interface DailyUnits {
    time: string
    sunrise: string
    sunset: string
}

export interface DailyForecast {
    time: string[]
    sunrise: string[]
    sunset: string[]
}

export interface CityInfoResponse {
    continent: string
    lookupSource: string
    continentCode: string
    localityLanguageRequested: string
    city: string
    countryName: string
    countryCode: string
    postcode: string
    principalSubdivision: string
    principalSubdivisionCode: string
    plusCode: string
    locality: string
    localityInfo: LocalityInfo
}

export interface LocalityInfo {
    administrative: Administrative[]
    informative: Informative[]
}

export interface Administrative {
    name: string
    description: string
    order: number
    adminLevel: number
    isoCode?: string
    wikidataId: string
    geonameId: number
}

export interface Informative {
    name: string
    description: string
    order: number
    isoCode?: string
    wikidataId?: string
    geonameId?: number
}

export type FoundedCitiesResponse = CityInfo[]

export interface CityInfo {
    name: string
    lat: number
    lon: number
    country: string,
}


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

export enum WeatherType {
    ClearSky = 'Clear',
    Overcast = 'Overcast',
    Cloudly = 'Cloudly',
    Fog = 'Fog',
    Drizzle = "Drizzle",
    Rain = 'Rain',
    Snow = 'Snow',
    SnowRain = 'Snowrain',
    Thunderstorm = 'Thunderstrom',
    Unknown = 'Unknown',
    Hail = 'Hail'
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
    id: string
    summary: string
    start: Start
    end: End
  }
  
  export interface Start {
    dateTime: string
    timeZone: string
  }
  
  export interface End {
    dateTime: string
    timeZone: string
  }