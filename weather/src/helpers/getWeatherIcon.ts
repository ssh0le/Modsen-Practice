import { WeatherType, DayPeriod } from "@global/types";
import clearDay from '@weather-icons/day/clear.png'
import cloudlyDay from '../assets/weather-icons/day/cloudly.png'
import clearNight from '@weather-icons/night/clear.png'
import cloudlyNight from '../assets/weather-icons/night/cloudly.png'
import drizzle from '../assets/weather-icons/drizzle.png'
import fog from '../assets/weather-icons/fog.png'
import hail from '../assets/weather-icons/hail.png'
import overcast from '../assets/weather-icons/overcast.png'
import rain from '../assets/weather-icons/rain.png'
import snowRain from '../assets/weather-icons/show-rain.png'
import snow from '../assets/weather-icons/snow.png'
import thunderstorm from '../assets/weather-icons/thunderstorm.png'

export function getWeatherIcon(weatherType: WeatherType, dayPeriod: DayPeriod = DayPeriod.Day): string {
    switch (weatherType) {
        case WeatherType.ClearSky: return dayPeriod === DayPeriod.Day ? clearDay : clearNight;
        case WeatherType.Cloudly: return dayPeriod === DayPeriod.Day ? cloudlyDay : cloudlyNight;
        case WeatherType.Drizzle: return drizzle;
        case WeatherType.Fog: return fog;
        case WeatherType.Hail: return hail;
        case WeatherType.Overcast: return overcast;
        case WeatherType.SnowRain: return snowRain;
        case WeatherType.Rain: return rain;
        case WeatherType.Snow: return snow;
        case WeatherType.Thunderstorm: return thunderstorm;
        default: return overcast;
    }
}