import styled from 'styled-components';
import { WeatherType } from '../../../global/types';
import DailyForecastItem from './DailyForecastItem';

const DailyForecastWrapper = styled.div`
  display: flex;
  background-color: rgba(153, 220, 254, 0.854);
  padding: 10px;
`;

interface DailyForecastExample {
  date: Date;
  weatherType: WeatherType;
  temperature: number;
}

const DailyForecast = () => {
  const today = new Date();
  const forecastExample: DailyForecastExample[] = [
    {
      date: today,
      weatherType: WeatherType.ClearSky,
      temperature: 10,
    },
    {
      date: (new Date(today.getDate() + 1)),
      weatherType: WeatherType.Overcast,
      temperature: 10,
    },
    {
      date:  (new Date(today.getDate() + 2)),
      weatherType: WeatherType.SnowRain,
      temperature: 10,
    },
    {
      date:  (new Date(today.getDate() + 3)),
      weatherType: WeatherType.Hail,
      temperature: 10,
    },
    {
      date:  (new Date(today.getDate() + 4)),
      weatherType: WeatherType.Fog,
      temperature: 10,
    },
    {
      date:  (new Date(today.getDate() + 5)),
      weatherType: WeatherType.Drizzle,
      temperature: 10,
    },
    {
      date:  (new Date(today.getDate() + 6)),
      weatherType: WeatherType.Thunderstorm,
      temperature: 10,
    },
  ];
  return <DailyForecastWrapper>
    {forecastExample.map(day => <DailyForecastItem key={day.date.toDateString()} date={day.date} weatherType={day.weatherType} temperature={day.temperature}/>)}
  </DailyForecastWrapper>;
};

export default DailyForecast;
