import React, { FC } from 'react';
import { DayPeriod, WeatherType } from '@global/types';
import { getWeatherIcon } from '@helpers/getWeatherIcon';
import {
  ItemContainer,
  Name,
  IconContainer,
  IconImage,
  Temperature,
} from './styled';

interface DailyForecastItemProps {
  title: string;
  weatherType: WeatherType;
  temperature: number;
  dayPeriod?: DayPeriod;
}

const ForecastListItem: FC<DailyForecastItemProps> = ({
  title,
  weatherType,
  temperature,
  dayPeriod = DayPeriod.Day,
}) => {
  return (
    <ItemContainer>
      <Name>{title}</Name>
      <IconContainer>
        <IconImage
          src={getWeatherIcon(weatherType, dayPeriod)}
          alt={weatherType.toString()}
          title={weatherType.toString()}
        />
      </IconContainer>
      <Temperature>{temperature}°</Temperature>
    </ItemContainer>
  );
};

export default ForecastListItem;
