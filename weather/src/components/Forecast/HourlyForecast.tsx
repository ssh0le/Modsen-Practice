import styled from 'styled-components';
import { WeatherType } from '../../global/types';
import ForecastListItem from './ForecastListItem';

const HourlyForecastWrapper = styled.div`
  overflow-x: scroll;
  display: flex;
  padding: 10px;
  background-color: rgba(153, 220, 254, 0.854);
  ::-webkit-scrollbar {
    height: 5px;
  }
  ::-webkit-scrollbar-track {
  background-color: rgba(153, 220, 254, 0.854);
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  & > * {
    width: 10%;
  }
`;

interface HourlyForecastExample {
  date: Date;
  weatherType: WeatherType;
  temperature: number;
}

const HourlyForecast = () => {
  const foreacstExample: HourlyForecastExample[] = createExample(24);
  return (
    <HourlyForecastWrapper>
      {foreacstExample.map((item) => (
        <ForecastListItem
          key={item.date.toISOString()}
          title={getTime(item.date)}
          weatherType={item.weatherType}
          temperature={item.temperature}
        />
      ))}
    </HourlyForecastWrapper>
  );
};

export default HourlyForecast;

// helpers

function getTime(date: Date): string {
  if (date.getHours() === new Date().getHours()) {
    return 'Now';
  }
  return `${date.getHours()}:00`;
}

function getNextHourDate(hours: number): Date {
  const today = new Date();
  today.setTime(today.getTime() + hours * 60 * 60 * 1000);
  return today;
}

function createExample(amount: number): HourlyForecastExample[] {
  const example: HourlyForecastExample[] = [];
  const weatherTypes: WeatherType[] = [
    WeatherType.ClearSky,
    WeatherType.Overcast,
    WeatherType.SnowRain,
    WeatherType.Drizzle,
    WeatherType.Thunderstorm,
  ];
  for (let i = 0; i < amount; i++) {
    example.push({
      date: getNextHourDate(i),
      weatherType:
        weatherTypes[Math.floor(Math.random() * weatherTypes.length)],
      temperature: Math.floor(Math.random() * 10),
    });
  }
  return example;
}
