import { WeatherType } from "@global/types";

export function getDailyWeatherType(icon: number): WeatherType {
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