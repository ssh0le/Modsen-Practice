import { WeatherType, DayPeriod } from "@global/types";
import clear from "../assets/background-images/clear-day.jpeg";
import clearNight from "../assets/background-images/clear-Night.jpg";
import drizzle from "../assets/background-images/drizzle.jpg";
import drizzleNight from "../assets/background-images/drizzle-night.jpg";
import fog from "../assets/background-images/fog-day.jpg";
import fogNight from "../assets/background-images/fog.jpg";
import overcast from "../assets/background-images/overcast.jpg";
import overcastNight from "../assets/background-images/overcast-night.jpg";
import rain from "../assets/background-images/rain.jpg";
import rainNight from "../assets/background-images/rain-night.jpg";
import snow from "../assets/background-images/snow-day.jpg";
import snowNight from "../assets/background-images/snow-night.jpg";
import snowrain from "../assets/background-images/snowrain-day.jpg";
import snowrainNight from "../assets/background-images/snowrain-nigth.jpg";
import thunder from "../assets/background-images/thunder-day.jpg";
import thunderNight from "../assets/background-images/thunder-night.jpg";
import cloudly from '../assets/background-images/cloudy.jpg';
import cloudlyNight from '../assets/background-images/cloudy-night.jpg';

export const getBackgroundImage = (weatherType: WeatherType, dayPeriod: DayPeriod) : string  => {
    const isDay = dayPeriod === DayPeriod.Day;
    switch (weatherType) {
        case WeatherType.ClearSky: return isDay ? clear : clearNight;
        case WeatherType.Rain: return isDay ? rain : rainNight;
        case WeatherType.Overcast: return isDay ? overcast : overcastNight;
        case WeatherType.Snow: return isDay ? snow : snowNight;
        case WeatherType.SnowRain: return isDay ? snowrain : snowrainNight;
        case WeatherType.Fog: return isDay ? fog : fogNight;
        case WeatherType.Thunderstorm: return isDay ? thunder : thunderNight;
        case WeatherType.Drizzle: return isDay ? drizzle : drizzleNight;
        case WeatherType.Cloudly: return isDay ? cloudly : cloudlyNight; 
        default: return thunder;
    }
}