import { WeatherType } from "@global/types";

export function getHourlyWeatherType(weatherCode: number): WeatherType {
    switch (weatherCode) {
      case 0: return WeatherType.ClearSky;
      case 1:
      case 2: return WeatherType.Cloudly;
      case 3: return WeatherType.Overcast;
      case 45:
      case 48: return WeatherType.Fog;
      case 51:
      case 53:
      case 55:
      case 56:
      case 57: return WeatherType.Drizzle;
      case 61:
      case 63:
      case 65:
      case 80:
      case 81:
      case 82: return WeatherType.Rain;
      case 66:
      case 67: return WeatherType.SnowRain;
      case 71:
      case 73:
      case 75:
      case 85:
      case 86: return WeatherType.Snow;
      case 95:
      case 96: return WeatherType.Thunderstorm;
      case 99: return WeatherType.Hail;
      default: return WeatherType.Unknown;
    }
  }