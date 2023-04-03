import styled from 'styled-components';
import { WeatherType } from '../../global/types';
import ForecastListItem from './ForecastListItem';

const DailyForecastWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: rgba(153, 220, 254, 0.854);
  padding: 10px;
`;

interface DailyForecastExample {
  date: Date;
  weatherType: WeatherType;
  temperature: number;
}

const DailyForecast = () => {
  const forecastExample: DailyForecastExample[] = [
    {
      date: new Date(),
      weatherType: WeatherType.ClearSky,
      temperature: 10,
    },
    {
      date: getNextDay(1),
      weatherType: WeatherType.Overcast,
      temperature: 10,
    },
    {
      date:  getNextDay(2),
      weatherType: WeatherType.SnowRain,
      temperature: 10,
    },
    {
      date:  getNextDay(3),
      weatherType: WeatherType.Hail,
      temperature: 10,
    },
    {
      date:  getNextDay(4),
      weatherType: WeatherType.Fog,
      temperature: 10,
    },
    {
      date:  getNextDay(5),
      weatherType: WeatherType.Drizzle,
      temperature: 10,
    },
    {
      date:  getNextDay(6),
      weatherType: WeatherType.Thunderstorm,
      temperature: 10,
    },
  ];
  return <DailyForecastWrapper>
    {forecastExample.map(day => <ForecastListItem key={day.date.toDateString()} title={getShortDayName(day.date)} weatherType={day.weatherType} temperature={day.temperature}/>)}
  </DailyForecastWrapper>;
};

export default DailyForecast;
// helpers

function getShortDayName(date: Date): string {
    if (date.getDay() === (new Date()).getDay()) {
        return "Today";
    } else {
        return date.toLocaleString("default", { weekday: "short" });
    }
}

function getNextDay(nextDay: number): Date {
  const today = new Date();
  today.setDate(new Date().getDate() + nextDay);
  return today;
}