import { getWeatherIcon } from '@helpers/getWeatherIcon';
import React, { FC } from 'react';
import { useAppSelector } from '@hooks/storeHooks';
import { selectCurrentForecast } from '@store/selectors/selectForecast';
import {
  WeatherContainer,
  IconContainer,
  Icon,
  Temperature,
  Description,
  WeatherBody,
} from './styled';

const CurrentWeather: FC = () => {
  const { weatherType, temperature, summary, dayPeriod } = useAppSelector(
    selectCurrentForecast
  );
  return (
    <WeatherContainer>
      <WeatherBody>
        <IconContainer>
          <Icon src={getWeatherIcon(weatherType, dayPeriod)}/>
        </IconContainer>
        <Temperature>{temperature}°</Temperature>
      </WeatherBody>
      <Description>Summary: {summary}</Description>
    </WeatherContainer>
  );
};

export default CurrentWeather;
