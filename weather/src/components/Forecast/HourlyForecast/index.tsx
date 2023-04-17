import styled from 'styled-components';
import ForecastListItem from '../ForecastItem';
import React, { FC } from 'react';
import { useAppSelector } from '@hooks/storeHooks';
import { selectHourlyForecast } from '@store/selectors/selectForecast';
import {style} from '@global/style'

const HourlyForecastWrapper = styled.div`
  overflow-x: scroll;
  display: flex;
  height: 200px;
  gap: 20px;
  padding: 10px;
  background-color: ${props => props.theme.colors.forecastBackground};
  ${style.scrollBar}
`;

const HourlyForecast: FC = () => {
  const hourlyForeast = useAppSelector(selectHourlyForecast);
  return (
    <HourlyForecastWrapper>
      {hourlyForeast.map(({ time, temperature, weatherType, dayPeriod }) => (
        <ForecastListItem
          key={time}
          title={time}
          weatherType={weatherType}
          temperature={temperature}
          dayPeriod={dayPeriod}
        />
      ))}
    </HourlyForecastWrapper>
  );
};

export default HourlyForecast;
